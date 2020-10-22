export const blockDays = [
  // 2018
  new Date(2018, 7, 12),
  new Date(2018, 7, 13),
  new Date(2018, 7, 14),
  new Date(2018, 9, 6),
  new Date(2018, 9, 7),
  new Date(2018, 9, 8),
  new Date(2018, 10, 23),
  new Date(2018, 10, 24),
  new Date(2018, 11, 8),
  new Date(2018, 11, 9),
  new Date(2018, 11, 29),
  new Date(2018, 11, 30),
  // 2019
  new Date(2019, 2, 28),
  new Date(2019, 2, 29),
  new Date(2019, 2, 30),
  new Date(2019, 2, 31),
  new Date(2019, 7, 12),
  new Date(2019, 7, 13),
  new Date(2019, 7, 14),
  new Date(2019, 9, 12),
  new Date(2019, 9, 13),
  new Date(2019, 9, 14),
  new Date(2019, 10, 23),
  new Date(2019, 10, 24),
  new Date(2019, 11, 7),
  new Date(2019, 11, 8),
  new Date(2019, 11, 28),
  new Date(2019, 11, 29),
  new Date(2019, 11, 30),
  // 2020
  new Date(2020, 2, 28),
  new Date(2020, 2, 29),
  new Date(2020, 4, 2),
  new Date(2020, 4, 3),
  new Date(2020, 4, 4),
  new Date(2020, 4, 25),
  new Date(2020, 6, 24),
  new Date(2020, 6, 25),
  new Date(2020, 7, 11),
  new Date(2020, 7, 12),
  new Date(2020, 7, 13),
  new Date(2020, 8, 19),
  new Date(2020, 8, 20),
  new Date(2020, 8, 21),
  new Date(2020, 9, 10),
  new Date(2020, 9, 11),
  new Date(2020, 10, 16),
  new Date(2020, 10, 21),
  new Date(2020, 10, 22),
  new Date(2020, 11, 5),
  new Date(2020, 11, 6),
  new Date(2020, 11, 28),
  new Date(2020, 11, 29),
  new Date(2020, 11, 30),
  // 2021
  new Date(2021, 0, 2),
  new Date(2021, 2, 27),
  new Date(2021, 2, 28),
  new Date(2021, 4, 2),
  new Date(2021, 4, 3),
  new Date(2021, 4, 31),
  new Date(2021, 7, 12),
  new Date(2021, 7, 13),
  new Date(2021, 7, 14),
  new Date(2021, 8, 18),
  new Date(2021, 8, 19),
];

export const pricePeriods = {
  p1: {
    key: 'p1',
    name: '2018/3/1〜',
    period: {start: new Date(2018, 2, 1), end: new Date(2019, 8, 30)},
  },
  p2: {
    key: 'p2',
    name: '2019/10/1〜',
    period: {start: new Date(2019, 9, 1), end: new Date(2020, 2, 31)},
  },
  p3: {
    key: 'p3',
    name: '2020/4/1〜',
    period: {start: new Date(2020, 3, 1), end: new Date(2020, 11, 31)},
  }
};

export const passType = {
  common: {
    key: 'common',
    name: '共通',
  },
  land: {
    key: 'land',
    name: 'ランド',
  },
  sea: {
    key: 'sea',
    name: 'シー',
  },
};

export const personType = {
  adult: {
    key: 'adult',
    name: '大人',
  },
  child: {
    key: 'child',
    name: '小人',
  },
};

export const price = {
  adult: {
    common: {
      p1: 89000,
      p2: 91000,
      p3: 99000,
    },
    land: {
      p1: 61000,
      p2: 62000,
      p3: 68000,
    },
    sea: {
      p1: 61000,
      p2: 62000,
      p3: 68000,
    },
  },
  child: {
    common: {
      p1: 56000,
      p2: 57000,
      p3: 57000,
    },
    land: {
      p1: 39000,
      p2: 40000,
      p3: 40000,
    },
    sea: {
      p1: 39000,
      p2: 40000,
      p3: 40000,
    },
  },
}