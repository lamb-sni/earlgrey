export const schedule = {
  four: {
    value: 4,
    label: "4時間"
  },
  six: {
    value: 6,
    label: "6時間"
  },
  eight: {
    value: 8,
    label: "8時間"
  }
};

export const schedulePattern = {
  0: {
    label: "4時間 4時間 4時間 4時間 4時間 4時間"
  },
  1: {
    label: "4時間 4時間 4時間 4時間 8時間"
  },
  2: {
    label: "4時間 4時間 4時間 6時間 6時間"
  },
  3: {
    label: "6時間 6時間 6時間 6時間"
  },
  4: {
    label: "4時間 6時間 6時間 8時間"
  },
  5: {
    label: "4時間 4時間 8時間 8時間"
  },
  6: {
    label: "8時間 8時間 8時間"
  }
};

export type ScheduleObj = keyof typeof schedule;
