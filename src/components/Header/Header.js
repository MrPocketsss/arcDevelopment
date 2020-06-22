// React imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Material-ui imports
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

// Asset imports
import logo from "../../assets/logo.svg";
import useStyles from "./Style";

// Adds functionality for the ElevationScroll element from material-ui
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// Create the Header component
export default function Header(props) {
  const classes = useStyles(); // pull in the styles
  const theme = useTheme(); // allows the use of the theme in this Header function
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent); // sets a boolean to true if we're on an iPhone
  const matches = useMediaQuery(theme.breakpoints.down("md")); // allows the use of breakpoints on screen size change

  const [openDrawer, setOpenDrawer] = useState(false); //create state to manage whether or not the drawer is opened
  const [anchorEl, setAnchorEl] = useState(null); // create state to manage menu rendering
  const [openMenu, setOpenMenu] = useState(false); // create state to manage whether a menu is open

  const handleChange = (event, newValue) => props.setValue(newValue); // calls setValue in state for each selected tab
  // handles click events, setting the open state and anchorEl state
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  // handles menu item clicks for the services menu
  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };
  // handles reversing the effects from handleClick
  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setValue(1);
  };
  // options for the services menu items
  const menuOptions = [
    {
      id: "5",
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      id: "6",
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      id: "7",
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      id: "8",
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  //options for the drawer listItems
  const routes = [
    { id: "0", name: "Home", link: "/", activeIndex: 0, selectedIndex: 0 },
    {
      id: "1",
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { id: "2", name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { id: "3", name: "About Us", link: "/about", activeIndex: 3 },
    { id: "4", name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  // this useEffect will enforce the selected index when the page is loaded, and ensure we're set to the correct value
  useEffect(() => {
    [...menuOptions, routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  //drawers will be injected for >= medium screen sizes
  const drawers = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        classes={{ paper: classes.drawer }}
        anchor="right"
      >
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.id}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            selected={props.value === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
          >
            <ListItemText>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  //tabs will be injected for < medium screen sizes
  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route) => (
          <Tab
            key={route.id}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
        {/*----- this tab is left blank to prevent the tabs from -----*/}
        {/*----- complaining, and to render the correct value for the -----*/}
        {/*----- estimate button. -----*/}
        <Tab style={{ display: "none" }}></Tab>
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
        onClick={() => {
          props.setValue(5);
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
        MenuListProps={{ onMouseLeave: handleClose }} //when mouse leaves a menu, the menu closes
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.id}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              props.setValue(1);
              handleClose();
            }}
            selected={index === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            {matches ? drawers : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
