import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  content: {
    padding: 20,
    paddingTop: 170,
    width: "100%",
    // height: 3000,
    backgroundColor: theme.palette.background.default,
  },
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
