import React from "react";
import clsx from "clsx";
import {
  Container,
  Grid,
  makeStyles,
  Link,
  Typography,
  Box,
} from "@material-ui/core";
import Page from "src/components/Page";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.dark,
    paddingTop: 50,
  },
  box: {
    borderColor: theme.palette.text.dark + " !important",
    borderTop: "3px solid",
    color: theme.palette.text.dark,
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
  lastBox: {
    borderBottom: "3px solid",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
    "&:visited": {
      color: "inherit",
    },
  },
  projectTitle: {
    fontSize: "7rem",
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 10,
  },
}));

const ProjectListView = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  const prefix = "/project/";

  const projects = [
    {
      name: "Brauability",
    },
    { name: "Motorguide" },
    { name: "Sea ray" },
    { name: "BBH" },
    { name: "Woodpecker" },
  ];

  return (
    <Page className={classes.root} title="Projects">
      <Container maxWidth={false}>
        <Grid container spacing={0}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12}>
              <Link href={prefix + project.name} className={classes.link}>
                <Box
                  className={clsx(classes.box, {
                    [classes.lastBox]: index === projects.length - 1,
                  })}
                  justifyContent="center"
                  display="flex"
                  p={2}
                >
                  <Typography
                    className={classes.projectTitle}
                    color="inherit"
                    variant="body1"
                  >
                    {project.name}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default ProjectListView;
