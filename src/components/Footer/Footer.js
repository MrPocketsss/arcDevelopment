import React from "react";
import { Link } from "react-router-dom";

import { Grid, Hidden } from "@material-ui/core";

import useStyles from "./Style";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid container className={classes.mainContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                to="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => props.setValue(4)}
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
