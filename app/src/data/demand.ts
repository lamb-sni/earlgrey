export const demand = {
  superShortSupply: {
    label: "超供給不足",
    rate: 1.6
  },
  shortSupply: {
    label: "供給不足",
    rate: 1.3
  },
  usually: {
    label: "普通",
    rate: 1.0
  },
  overSupply: {
    label: "供給過多",
    rate: 0.8
  },
  superOverSupply: {
    label: "超供給過多",
    rate: 0.6
  }
};

export type DemandKey = keyof typeof demand;

export const convertDemandLabel = (key: DemandKey) => demand[key].label;
