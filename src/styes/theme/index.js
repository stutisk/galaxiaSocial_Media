import { createTheme } from "@mui/material/styles";
const Colors = {
  primary: "#0E92F2",
  error: "#FA3C3C",
  white: "#E5E0CA",
  lightGray: "#252527",
};
export { Colors };

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondry: {
      main: Colors.lightGray,
    },
    common: {
      white: Colors.white,
    },
  },
  typography: {
    myVariant: {
      fontSize: "1.5rem",
    },
  },
});
