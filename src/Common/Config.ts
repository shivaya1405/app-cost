enum Environment {
  PRODUCTION = "Production",
  DEVELOPMENT = "Development",
  TEST = "Test",
}
export const environmentConfig: any = {
  [Environment.PRODUCTION]: { items: [], totalCost: 0 },
  [Environment.DEVELOPMENT]: { items: [], totalCost: 0 },
  [Environment.TEST]: { items: [], totalCost: 0 },
};
