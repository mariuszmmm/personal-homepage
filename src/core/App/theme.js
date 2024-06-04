const colorNames = {
  mineShaf: "#252525",
  mineShaf_2: "#363636B8",
  doveGray: "#6E6E6E",
  slateGray: "#6E7E91",
  iron: "#D1D5DA4D",
  iron_2: "#D1D5DA1A",
  mercury: "#E5E5E5",
  whiteLilac: "#FBFBFE",
  white: "#FFFFFF",
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
  boxShadow:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.mineShaf,
    secendary: colorNames.scienceBlue,
    textPrimary: colorNames.slateGray,
    textSecendary: colorNames.mineShaf,
    backgroundPrimary: colorNames.whiteLilac,
    backgroundSecendary: colorNames.white,
    modeSwitch: {
      text: colorNames.white,
      background: colorNames.iron,
    },
    button: {
      text: colorNames.white,
      background: colorNames.scienceBlue,
      border: colorNames.iron,
      focusShadow: colorNames.anakiwa,
      selectedShadow: colorNames.parsley,
    },
    line: {
      primary: colorNames.mercury,
      secendary: colorNames.iron,
    },
    spinner: {
      primary: colorNames.scienceBlue,
      secendary: colorNames.iron,
    },
    tile: {
      title: colorNames.scienceBlue,
      border: colorNames.iron,
      hoveredBorder: colorNames.scienceBlue_2,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.white,
    secendary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    textSecendary: colorNames.white,
    backgroundPrimary: colorNames.mineShaf,
    backgroundSecendary: colorNames.mineShaf_2,
    modeSwitch: {
      text: colorNames.mineShaf,
      background: colorNames.doveGray,
    },
    button: {
      text: colorNames.white,
      background: colorNames.dodgerBlue,
      border: colorNames.iron,
      focusShadow: colorNames.shipCove,
      selectedShadow: colorNames.parsley,
    },
    line: {
      primary: colorNames.mercury,
      secendary: colorNames.iron_2,
    },
    spinner: {
      primary: colorNames.dodgerBlue,
      secendary: colorNames.mineShaf_2,
    },
    tile: {
      title: colorNames.white,
      border: colorNames.iron_2,
      hoveredBorder: colorNames.scienceBlue_3,
    },
  },
};
