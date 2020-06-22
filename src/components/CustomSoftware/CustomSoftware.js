import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import useStyles from "./Style";
import CallToAction from "../CallToAction/CallToAction";
import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";
import documentsAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data";
import roots from "../../assets/root.svg";
import automationAnimation from "../../animations/automationAnimation/data";
import uxAnimation from "../../animations/uxAnimation/data";

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // options for the animation
  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // options for the animation
  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // options for the animation
  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // options for the animation
  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      {/*----- Paragraph block -----*/}
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
              style={{ backgroundColor: "transparent" }}
            >
              <img alt="Back to services page" src={backArrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency. Our custom solutions are
              designed from the ground up with your needs, wants, and goals at
              the core. This collaborative process produces finely tuned
              software that is much more effective at improving your workflow
              and reducing costs than generalized options.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
              style={{ backgroundColor: "transparent" }}
            >
              <img
                alt="forward to iOS/Android App Development Page"
                src={forwardArrow}
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/*----- Save [energy, time, money] block -----*/}
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img alt="lightbult" src={lightbulb} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img alt="stopwatch" src={stopwatch} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img alt="cash" src={cash} />
          </Grid>
        </Grid>
      </Grid>
      {/*----- Data and Scale block -----*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        alignItems={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesSM ? "15em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*----- Tree block -----*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginTop: "20em", marginBottom: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              alt="tree with roots extending out"
              src={roots}
              height={matchesSM ? "300em" : "450em"}
              height={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*----- Automation and UX block -----*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        alignItems={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*----- Call to action block -----*/}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
