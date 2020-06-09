const featureFlags = {
  footerOpenSource: false,
  comments: false,
  tags: false,
  searchForm: false,

  filters: false,
  ssr: false,
  sources: false,
  fixedPWAiOS: false,
  // updatedThemeSwitch: false,
}

export const isFeatureEnabled = name => featureFlags[name]
export const setFeature = (name, status) => (featureFlags[name] = status)
export const getAll = () => featureFlags
