const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  slateGray: "#6E7E91",
  iron: "#D1D5DA4D",
  // mercury: "#E5E5E5",
  mineShaf: "#252525",
  mineShaf_2: "#666666",
  scienceBlue: "#0366D6",
  dodgerBlue: "#2188FF",
  anakiwa: "#8CC2FF",
  shipCove: "#6D93BE",
  parsley: "#14462033",

  test: "yellow",
};

const common = {
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400, // użyty
    medium: 500,
    semiBold: 600, //użyty
    bold: 700, // użyty
    extraBold: 800,
    heavy: 900, //użyty
  },
  breakpoints: {
    xs: 0,
    sm: 576, //użyty
    md: 768, //użyty
    lg: 992,  //użyty
    xl: 1200,
    xxl: 1400,
  },
};

export const themeLight = {
  ...common,
  page: {
    color: colorNames.slateGray,
    backgroundColor: colorNames.whiteLilac,
  },
  mode: {
    switch: {
      color: colorNames.white,
      backgroundColor: colorNames.iron,
    },
  },
  title: {
    color: colorNames.mineShaf,
  },
  button: {
    backgroundColor: colorNames.scienceBlue,
    color: colorNames.white,
    borderColor: colorNames.iron,
    focusShadowColor: colorNames.anakiwa,
    selectedShadowColor: colorNames.parsley,
  },
};

export const themeDark = {
  ...common,
  page: {
    color: colorNames.white,
    backgroundColor: colorNames.mineShaf,
  },
  mode: {
    switch: {
      color: colorNames.mineShaf,
      backgroundColor: colorNames.mineShaf_2,
    },
  },
  button: {
    backgroundColor: colorNames.dodgerBlue,
    color: colorNames.white,
    borderColor: colorNames.iron,
    focusShadowColor: colorNames.shipCove,
    selectedShadowColor: colorNames.parsley,
  },
};
