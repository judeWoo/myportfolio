import React from "react";
import MainLayout from "src/layouts/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <ProjectsView /> },
      { path: "experience", element: <ExperienceView /> },
      { path: "about", element: <AboutView /> },
      { path: "contact", element: <ContactView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
