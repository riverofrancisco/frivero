import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Button,
  Grid,
  Typography,
  Collapse,
  Box,
  IconButton,
  Fade,
  Chip,
  Stack,
  Skeleton,
} from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ProjectDetail from "./projectDetail";
import { useAppSelector } from "../../hooks/hooksRedux";
import ProjectForm from "../Forms/Projects/ProjectForm";
import { Colours } from "../../Theme/theme";

interface Props {
  project: any;
  currentLanguage: string;
  refresh: any;
}

const ProyectCard = ({ project, currentLanguage, refresh }: Props) => {
  const isAuth = useAppSelector((state) => state.global.isAuth);
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  const [boxHeight, setBoxHeight] = useState(0);
  const firstBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstBoxRef.current) {
      setBoxHeight(firstBoxRef.current.offsetHeight);
    }
 
  }, []);

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      sx={{
        width: { xs: "95%", sm: "47%", md: "40%", lg: "30%" },
        bgcolor: "none",
        borderRadius: 5,
        p: 0.5,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.03)",
          transitionDelay: "0.10s",
        },
        boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
        mb: { xs: 5, sm: 1 },
      }}
    >
      <Grid item xs={12} >
        <Box onClick={() => handleLink(project.link)}>
          <img
            src={project.image}
            alt={project.name.en}
            style={{
              borderRadius: 15,
              width: "100%",
            }}
          />
        </Box>

        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Grid item sx={{ display: "flex" }}>
            {project.video && <IconButton
              size="small"
              sx={{ m: 0.5 }}
              onClick={() => handleLink(project.video)}
            >
              <YouTubeIcon />
            </IconButton>}
            <IconButton
              size="small"
              sx={{ m: 0.5 }}
              onClick={() => handleLink(project.link)}
            >
              <OpenInNewIcon />
            </IconButton>
            <ProjectDetail
              project={project}
              currentLanguage={currentLanguage}
            />
            {isAuth && (
              <ProjectForm
                project={project}
                refresh={refresh}
                isEditing={true}
                currentLanguage={currentLanguage}
              />
            )}
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {project.name[currentLanguage]}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProyectCard;
