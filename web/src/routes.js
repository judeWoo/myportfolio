import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "src/layouts/MainLayout";
import ProjectListView from "src/views/projects/ProjectListView";
import ProjectView from "src/views/projects/ProjectView";
import ExperienceView from "src/views/experience/ExperienceView";
import AboutView from "src/views/about/AboutView";
import ContactView from "src/views/contact/ContactView";
import NotFoundView from "src/views/errors/NotFoundView";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <ProjectListView /> },
      { path: "project/:id", element: <ProjectView /> },
      { path: "experience", element: <ExperienceView /> },
      { path: "about", element: <AboutView /> },
      { path: "contact", element: <ContactView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
