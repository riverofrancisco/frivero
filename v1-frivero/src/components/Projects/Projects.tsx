import React, { useState, useEffect } from "react";
import ProyectCard from "./projectCard";
import { CircularProgress, Grid, Box, Typography } from "@mui/material/";

import ProjectForm from "../Forms/Projects/ProjectForm";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { emptyProject } from "../../interfaces/interfaces";
import { getProjects } from "../../middlewares/projects/get";
import { projectsUpdater } from "../../redux/portfolio/actions";
import { ReduxLoader } from "../Actions/ReduxLoader";

const ProyectsList = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.global.language);
  const isAuth = useAppSelector((state) => state.global.isAuth);
  const allProjects = useAppSelector((state) => state.global.projects.list);

  const [id, setId] = useState("Projects");
  /* const [projects, setProjects] = useState(ProjectsEN); */

  const getData = async () => {
    const data = await getProjects().then((data: any) =>
      data.sort((a: any, b: any) => b.index - a.index)
    );
    dispatch(projectsUpdater(data));
  };

  const getLanguage = () => {
    if (currentLanguage === "en") {
      setId("Projects");
    } else if (currentLanguage === "es") {
      setId("Proyectos");
    }
  };

  React.useEffect(() => {
    getData();
    getLanguage();
    console.log("Proyects loaded");
  }, [currentLanguage]);

  return (
    <Grid container id={id} px="11.5%" sx={{ my: { xs: 3 }, pt: { sm: 6 } }}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={2}
      >
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { md: "flex" },
            fontWeight: 800,
            letterSpacing: { sm: ".2rem" },
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {currentLanguage === "en" ? id : id}
        </Typography>
        {isAuth && (
          <Box alignSelf="end" sx={{ mx: 5 }}>
            {" "}
            <ProjectForm
              project={emptyProject}
              refresh={getData}
              isEditing={false}
              currentLanguage={currentLanguage}
            />
          </Box>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        py={2}
      >
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          {allProjects.length > 0 ? (
            allProjects.map((project: any, index: number) => {
              return (
                <ProyectCard
                  key={`${project.id}`}
                  project={project}
                  currentLanguage={currentLanguage}
                  refresh={getData}
                />
              );
            })
          ) : (
            <ReduxLoader />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProyectsList;
