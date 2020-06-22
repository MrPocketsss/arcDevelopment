import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "0.5em",
  },
  heading: {
    maxWidth: "40em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
  rowContainer: {
    padding: "0 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.5em",
    },
  },
}));

export default useStyles;
