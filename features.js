const featureFlags = {
  footerOpenSource: false,
  comments: false,
  tags: false,
  searchForm: true,
  filters: false,
  fixedPWAiOS: false,
  sources: false,
  updatedThemeSwitch: false,
  feed: false,
}

export const isFeatureEnabled = name => featureFlags[name]
export const setFeature = (name, status) => (featureFlags[name] = status)
export const getAll = () => featureFlags
