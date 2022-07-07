import { createTheme } from "@mui/material/styles";
const Colors = {
  primary: "#0E92F2",
  error: "#FA3C3C",
  white: "#E5E0CA",
  lightGray: "#5A5A5A",
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
    border:{
      main:Colors.lightGray,
    }
  },
  typography: {
    myVariant: {
      fontSize: "1.4rem",
    },
    myVariant2:{
      fontSize:
        "2rem"   
    },
    myVariant3:{
      fontSize:
        "5rem"   
    },
    multilineColor:{
      color:'red'
  }
  },
});
