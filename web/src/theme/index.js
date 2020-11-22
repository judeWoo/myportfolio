import { createMuiTheme, colors } from "@material-ui/core";
import typography from "src/theme/typography";

const theme = createMuiTheme({
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.common.white,
    },
    secondary: {
      main: colors.common.black,
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      dark: colors.common.black,
      light: colors.common.white,
    },
  },
  ...typography,
});

export default theme;
