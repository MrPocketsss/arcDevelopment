import React from "react";
import { Link } from "react-router-dom";

import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import useStyles from "./Style";
import ButtonArrow from "../App/ButtonArrow";

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      justify={matchesSM ? "space-around" : "space-between"}
      alignItems="center"
      className={classes.background}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st century.
            </Typography>
            <Grid
              container
              item
              direction="row"
              justify={matchesSM ? "center" : undefined}
            >
              <Button
                variant="outlined"
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.learnButton}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          component={Link}
          to="/estimate"
          onClick={() => props.setValue(5)}
          className={classes.estimateButton}
        >
          Free estimate
        </Button>
      </Grid>
    </Grid>
  );
}
