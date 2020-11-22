import { createMuiTheme, colors } from "@material-ui/core";
import typography from "src/theme/typography";

const theme = createMuiTheme({
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      content: colors.common.black,
    },
    primary: {
      main: colors.common.white,
    },
    secondary: {
      main: colors.common.black,
    },
    text: {
      primary: colors.pink[500],
      secondary: colors.pink[700],
      dark: colors.common.black,
      light: colors.common.white,
    },
  },
  ...typography,
});

export default theme;
