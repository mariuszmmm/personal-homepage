const colorNames = {
  white: "FFFFFF",
  whiteLilac: "#FBFBFE",
  slateGray: "#6E7E91",
  iron: "rgba(209, 213, 218, 0.3)",
  mercury: "#E5E5E5",
  white: "#FFFFFF",
  mineShaf: "#252525",
  mineShaf_2: "#666666",

  test: "yellow",
};

const common = {
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400, // użyty
    medium: 500,
    semiBold: 600,
    bold: 700, // użyty
    extraBold: 800,
    heavy: 900,
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
};
