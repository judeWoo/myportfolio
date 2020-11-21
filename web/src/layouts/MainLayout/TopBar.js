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
  experience: "Experience",
  contact: "Contact",
};

const hrefs = {
  about: "/about",
  contact: "/contact",
  experience: "/experience",
};

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 60,
    paddingRight: 60,
    width: "100%",
  },
  list: {
    display: "flex",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <header className={clsx(classes.root, className)} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Typography className={classes.name} color="textPrimary" variant="h5">
            {text.name}
          </Typography>
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <List className={classes.list} aria-label="header menus">
            <ListItemLink href={hrefs.about}>
              <ListItemText primary={text.about} />
            </ListItemLink>
            <ListItemLink href={hrefs.contact}>
              <ListItemText primary={text.contact} />
            </ListItemLink>
            <ListItemLink href={hrefs.experience}>
              <ListItemText primary={text.experience} />
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
