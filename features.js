const featureFlags = {
  footerOpenSource: false,
  comments: false,
  tags: false,
  searchForm: false,
  filters: false,

  fixedPWAiOS: false,
  // sources: false,
  // updatedThemeSwitch: false,
}

export const isFeatureEnabled = name => featureFlags[name]
export const setFeature = (name, status) => (featureFlags[name] = status)
export const getAll = () => featureFlags
