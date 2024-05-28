const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  slateGray: "#6E7E91",
  iron: "#D1D5DA4D",
  iron_2: "#D1D5DA1A",
  mercury: "#E5E5E5",
  mineShaf: "#252525",
  mineShaf_2: "#363636B8",
  doveGray: "#6E6E6E",
  scienceBlue: "#0366D6",
  scienceBlue_2: "#0366D633",
  scienceBlue_3: "#0366D680",
  dodgerBlue: "#2188FF",
  anakiwa: "#8CC2FF",
  shipCove: "#6D93BE",
  parsley: "#14462033",
};

const common = {
  fontWeight: {
    normal: 400,
    semiBold: 600,
    bold: 700,
    heavy: 900,
  },
  breakpoints: {
    small: 576,
    medium: 768,
    large: 992,
  },
};

export const themeLight = {
  ...common,
  page: {
    color: colorNames.slateGray,
    primaryBackgroundColor: colorNames.whiteLilac,
    secendaryBackgroundColor: colorNames.white,
  },
  modeSwitch: {
    color: colorNames.white,
    backgroundColor: colorNames.iron,
  },
  title: {
    color: colorNames.mineShaf,
  },
  button: {
    color: colorNames.white,
    backgroundColor: colorNames.scienceBlue,
    borderColor: colorNames.iron,
    focusShadowColor: colorNames.anakiwa,
    selectedShadowColor: colorNames.parsley,
  },
  line: {
    primaryColor: colorNames.mercury,
    secendaryColor: colorNames.iron,
  },
  dot: {
    color: colorNames.scienceBlue,
  },
  icon: {
    primaryColor: colorNames.scienceBlue,
    secendaryColor: colorNames.mineShaf,
  },
  errorTitle: {
    color: colorNames.mineShaf,
  },
  spinner: {
    primaryColor: colorNames.scienceBlue,
    secendaryColor: colorNames.iron,
  },
  tile: {
    borderColor: colorNames.iron,
    hoveredBorderColor: colorNames.scienceBlue_2,
  },
  tileTitle: {
    color: colorNames.scienceBlue,
  },
  mail: {
    primaryColor: colorNames.mineShaf,
    secendaryColor: colorNames.scienceBlue,
  },
  link: {
    color: colorNames.scienceBlue,
  },
};

export const themeDark = {
  ...common,
  page: {
    color: colorNames.white,
    primaryBackgroundColor: colorNames.mineShaf,
    secendaryBackgroundColor: colorNames.mineShaf_2,
  },
  modeSwitch: {
    color: colorNames.mineShaf,
    backgroundColor: colorNames.doveGray,
  },
  button: {
    color: colorNames.white,
    backgroundColor: colorNames.dodgerBlue,
    borderColor: colorNames.iron,
    focusShadowColor: colorNames.shipCove,
    selectedShadowColor: colorNames.parsley,
  },
  line: {
    primaryColor: colorNames.mercury,
    secendaryColor: colorNames.iron_2,
  },
  spinner: {
    primaryColor: colorNames.dodgerBlue,
    secendaryColor: colorNames.mineShaf_2,
  },
  dot: {
    color: colorNames.dodgerBlue,
  },
  icon: {
    primaryColor: colorNames.dodgerBlue,
    secendaryColor: colorNames.white,
  },
  errorTitle: {
    color: colorNames.white,
  },
  tile: {
    borderColor: colorNames.iron_2,
    hoveredBorderColor: colorNames.scienceBlue_3,
  },
  tileTitle: {
    color: colorNames.white,
  },
  mail: {
    primaryColor: colorNames.white,
    secendaryColor: colorNames.dodgerBlue,
  },
  link: {
    color: colorNames.dodgerBlue,
  },
};
