import { Colors } from "./types";

export const baseColors = {
  failure: "#fe0000",
  primaryBright: "#9f76fc",
  primaryDark: "#900C3F",
  secondary: "#581845",
  success: "#2ecc71",
  warning: "#f1c40f",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#866fba",
  background: "#fcfbff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#581845",
  textDisabled: "#a4918b",
  textSubtle: "#581845",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#7d3c98",
  primary: "#8c75c2",
  background: "#353231",
  backgroundDisabled: "#423a37",
  contrast: "#FFFFFF",
  invertedContrast: "#261813",
  input: "#59453e",
  primaryDark: "#0098A1",
  tertiary: "#474036",
  text: "#fcf5e2",
  textDisabled: "#706460",
  textSubtle: "#d4c7c3",
  borderColor: "#63524c",
  card: "#2b2725",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5c4231 0%, #54352a 100%)",
  },
};