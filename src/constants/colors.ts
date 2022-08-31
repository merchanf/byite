interface Icolors {
  [key: string]: {
    [key: number]: string;
  };
}

const colors: Icolors = {
  red: {
    950: '#180808',
    900: '#481918',
    800: '#782a28',
    700: '#a73a38',
    600: '#d74b48',
    500: '#ef5350',
    400: '#f16462',
    300: '#f48785',
    200: '#f7a9a8',
    100: '#facbcb',
    50: '#fdeeee',
  },
  linen: {
    950: '#191716',
    900: '#4a4642',
    800: '#7b756f',
    700: '#aca49b',
    600: '#ddd3c7',
    500: '#f6eadd',
    400: '#f7ece0',
    300: '#f9f0e7',
    200: '#fbf5ee',
    100: '#fcf9f5',
    50: '#fefdfc',
  },
  oldBurgundy: {
    950: '#070404',
    900: '#1c1210',
    800: '#2b1a19',
    700: '#392321',
    600: '#402825',
    500: '#472c29',
    400: '#59413e',
    300: '#7e6b69',
    200: '#a39694',
    100: '#c8c0bf',
    50: '#edeaea',
  },
  deepChampagne: {
    950: '#191510',
    900: '#4a402f',
    800: '#7c6a4f',
    700: '#ad946f',
    600: '#debf8e',
    500: '#f7d49e',
    400: '#f8d8a8',
    300: '#f9e1bb',
    200: '#fbeacf',
    100: '#fdf2e2',
    50: '#fefbf5',
  },

  white: '#FDFEFE',
  black: '#17202A',
  brown: '#472C29',
};

export default colors;