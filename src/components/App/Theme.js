import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    body1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: arcBlue,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});

// default theme list
/*
  {
    palette: {
      common: {}, //this stores common colors for site
      type:, //"light" or "dark"
      [primary, secondary, error, warning, info, successs=]: { //color types
        light:
        main: // you can just set this, and material calculates the others
        dark:
        contrastText: //color you want the text to be for this color
      },
      grey: {
        // these are for styling elements consistent greys
      },
      text: { //colors for your text
        primary:
        secondary:
        disabled:
        hint:
      },
      divider: rgba(), //the color for your dividers
      background: {
        paper: #fff,     // the default style for the paper element
        default: #fafafa // the default background color
      },
      action: {
        // this has all the styles for each action you may want a 
        // component to perform
        active, hover, hoverOpacity, selected, selectedOpacity, disabled,
        disabledBackground, disabledOpacity, focus, focusOpacity, activatedOpacity
      }
    }
  }
*/
