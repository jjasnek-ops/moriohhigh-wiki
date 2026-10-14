/** Public ad-unit switches. Credentials never belong in this configuration. */
export const ADSTERRA_KEYS: Record<string, string | undefined> = {
  'native-banner': import.meta.env.PUBLIC_ADSTERRA_SLOT_NATIVE_BANNER,
  'incontent-728x90': import.meta.env.PUBLIC_ADSTERRA_SLOT_INCONTENT_728X90,
  'incontent-468x60': import.meta.env.PUBLIC_ADSTERRA_SLOT_INCONTENT_468X60,
  'sidebar-300x250': import.meta.env.PUBLIC_ADSTERRA_SLOT_SIDEBAR_300X250,
  'sticky-320x50': import.meta.env.PUBLIC_ADSTERRA_SLOT_STICKY_320X50,
  'sidebar-160x300': import.meta.env.PUBLIC_ADSTERRA_SLOT_SIDEBAR_160X300,
  'sidebar-160x600': import.meta.env.PUBLIC_ADSTERRA_SLOT_SIDEBAR_160X600,
};

export const adsterraEnabled = Object.values(ADSTERRA_KEYS).some(Boolean);
