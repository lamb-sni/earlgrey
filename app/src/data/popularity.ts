export const popularity = {
  veryPopular: {
    label: "大人気",
    rate: 1.4
  },
  popular: {
    label: "人気",
    rate: 1.2
  },
  usually: {
    label: "普通",
    rate: 1.0
  },
  unpopular: {
    label: "不人気",
    rate: 0.8
  }
};

export type PopularityKey = keyof typeof popularity;

export const convertPopularityLabel = (key: PopularityKey) => popularity[key].label;

export const getPopularityRate = (key: PopularityKey) => popularity[key].rate;
