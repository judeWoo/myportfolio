import React, { useState } from "react";
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
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import Logo from "src/components/Logo";

const text = {
  name: "Jude Hokyoon Woo",
  role: "Interactive Developer",
  about: "Know More",
  contact: "kw021992@gmail.com",
};

const hrefs = {
  about: "/about",
  contact: "/",
};

const unBlended = (theme) => ({
  "mix-blend-mode": "difference",
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    width: "100%",
    color: theme.palette.text.light,
  },
  home: {
    cursor: "pointer",
    textAlign: "left",
    ...unBlended(theme),
    "&:hover": {
      textDecoration: "none",
    },
  },
  title: {
    fontWeight: 700,
    fontSize: "4rem",
  },
  subTitle: {
    fontWeight: 700,
    fontSize: "2rem",
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
    position: "relative",
    "&::after": {
      content: "''",
      display: "block",
      width: "100%",
      height: 1,
      position: "absolute",
      top: 38,
      left: 0,
      background: theme.palette.background.default,
      transform: "scaleX(0)",
      transformOrigin: "right top",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easInOut,
        duration: theme.transitions.duration.standard,
      }),
    },
    "&:hover": {
      "&::after": {
        transform: "scaleX(1)",
        transformOrigin: "left top",
      },
    },
  },
  link: {
    "&:visited": {
      color: "inherit",
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
      fontSize: 20,
      color: theme.palette.text.light,
    },
  },
  toolbar: {
    alignItems: "flex-start",
  },
}));

function ListItemLink(props) {
  return <ListItem component="a" {...props} />;
}

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <header className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar} disableGutters={true}>
        <Link className={clsx(classes.home, classes.link)} href="/">
          <Typography className={classes.title} color="primary" variant="h1">
            {text.name}
          </Typography>
          <Typography
            className={classes.subTitle}
            color="primary"
            variant="subtitle1"
          >
            {text.role}
          </Typography>
        </Link>
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
