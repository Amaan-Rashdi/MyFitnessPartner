import { DARK_THEME, LIGHT_THEME } from "./theme.actionTypes.js";

const lightTheme = {};
const darkTheme = {};

export const darkThemeAction = () => ({
  type: DARK_THEME,
  payload: darkTheme,
});

export const lightThemeAction = () => ({
  type: LIGHT_THEME,
  payoad: lightTheme,
});
