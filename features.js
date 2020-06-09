const featureFlags = {
  searchForm: false,
  filters: false,
  tags: false,
  comments: false,
  ssr: false,
  sources: false,
  fixedPWAiOS: false,
  updatedThemeSwitch: false,
  footerOpenSource: false,
  fixedGithubBadge: false,
}

export const isFeatureEnabled = name => featureFlags[name]
export const setFeature = (name, status) => (featureFlags[name] = status)
export const getAll = () => featureFlags
