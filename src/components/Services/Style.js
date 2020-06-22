import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: { marginLeft: 0 },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: { marginBottom: "2em" },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: { padding: 25 },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
}));

export default useStyles;
