import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import Logo from "src/components/Logo";

const text = {
  name: "Jude Hokyoon Woo",
  about: "Know More",
  contact: "kw021992@gmail.com",
};

const hrefs = {
  about: "/about",
  contact: "/",
};

const unBlended = (theme) => ({
  "mix-blend-mode": "difference",
  color: theme.palette.text.light,
});

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
  },
  home: {
    fontWeight: 700,
    ...unBlended(theme),
  },
  list: {
    display: "flex",
    ...unBlended(theme),
  },
  listItemLink: {
    display: "flex",
    whiteSpace: "nowrap",
    paddingLeft: 0,
    paddingRight: 0,
  },
  link: {
    "&:visited": {
      color: "inherit",
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  preDivider: {
    marginLeft: 100,
    position: "relative",
    "&::before": {
      content: "'|'",
      display: "block",
      position: "absolute",
      top: 0,
      left: -50,
      pointerEvents: "none",
      height: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: 24,
      color: theme.palette.text.light,
    },
  },
}));

function ListItemLink(props) {
  return <ListItem component="a" {...props} />;
}

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <header className={clsx(classes.root, className)} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Typography
            className={clsx(classes.home, classes.link)}
            color="textPrimary"
            variant="h1"
          >
            {text.name}
          </Typography>
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <List
            component="nav"
            className={classes.list}
            aria-label="header menus"
          >
            <ListItemLink
              className={clsx(classes.listItemLink, classes.link)}
              href={hrefs.about}
            >
              <ListItemText primary={text.about} />
            </ListItemLink>
            <ListItemLink
              className={clsx(
                classes.listItemLink,
                classes.link,
                classes.preDivider
              )}
              href={hrefs.contact}
            >
              <ListItemText primary={text.contact} />
            </ListItemLink>
          </List>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </header>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
