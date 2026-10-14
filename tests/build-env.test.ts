import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, test } from 'vitest';

const script = join(dirname(fileURLToPath(import.meta.url)), '../scripts/sync-build-env.mjs');
function buildSettings(config: string) {
  const dir = mkdtempSync(join(tmpdir(), 'morioh-build-env-'));
  try {
    writeFileSync(join(dir, 'wrangler.toml'), config);
    const run = spawnSync(process.execPath, [script], { cwd: dir, encoding: 'utf8' });
    const file = join(dir, '.env.production.local');
    return { status: run.status, output: existsSync(file) ? readFileSync(file, 'utf8') : '' };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test('static builds inherit public settings but exclude credentials and commented switches', () => {
  const result = buildSettings('[vars]\nSITE_URL = "https://example.wiki"\nPUBLIC_GA_ID = "G-TEST"\n#PUBLIC_ADSTERRA_SLOT_NATIVE_BANNER = "disabled"\nCLOUDFLARE_API_TOKEN = "private-test-value"\n[env.preview.vars]\nPUBLIC_GA_ID = "G-OTHER"\n');
  expect(result.status).toBe(0);
  expect(result.output).toContain('SITE_URL="https://example.wiki"');
  expect(result.output).toContain('PUBLIC_GA_ID="G-TEST"');
  expect(result.output).not.toMatch(/private-test-value|CLOUDFLARE|disabled|G-OTHER/);
});

test('missing origin or unsupported public syntax fails without a partial env file', () => {
  for (const config of ['[vars]\nPUBLIC_GA_ID = "G-TEST"\n', '[vars]\nSITE_URL = "https://example.wiki"\nPUBLIC_GA_ID = unquoted\n']) {
    const result = buildSettings(config);
    expect(result.status).not.toBe(0);
    expect(result.output).toBe('');
  }
});
