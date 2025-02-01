const theme = {
  colors: {
    background: "#f8fff8",
    greenPrimary: "#297152",
    text: "#99b0a7",
    textSecondary: "#9eae9e",
    textBlack: "#000000",
    inputWhite: "#f3f2e4",
  },
  fonts: {
    regular: "Montserrat_400Regular",
    bold: "Montserrat_700Bold",
    extrabold: "Montserrat_800ExtraBold",
  },
  spacing: {
    buttonPadding: "15px",
    buttonMarginTop: "20px",
  },
  borders: {
    buttonRadius: "10px",
  },
};

export type Theme = typeof theme;

export default theme;
