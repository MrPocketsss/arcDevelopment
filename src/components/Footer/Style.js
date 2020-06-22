import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: { width: "21em" },
    [theme.breakpoints.down("xs")]: { width: "15em" },
  },
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("md")]: { height: "2em", width: "2em" },
    [theme.breakpoints.down("xs")]: { height: "1.5em", width: "1.5em" },
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  mainContainer: {
    position: "absolute",
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("md")]: { right: "0.6em" },
  },
}));

export default useStyles;
