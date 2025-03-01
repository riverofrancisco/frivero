import React, { useState, useEffect } from "react";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  Typography,
  IconButton,
  Box,
  Link,
  Button,
  ListItemIcon,
  Tooltip,
  Stack,
} from "@mui/material/";
import { RiTwitterXFill } from "react-icons/ri";
import { useAppSelector } from "../../../hooks/hooksRedux";

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    linkto: "https://www.linkedin.com/in/rivero-francisco/",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    linkto: "https://github.com/riverofrancisco",
  },
  /*   {
    icon: <RiTwitterXFill />,
    name: "X",
    linkto: "https://twitter.com/RiveroFran_IT",
  }, */
  {
    icon: <WhatsAppIcon />,
    name: "WhatsApp",
    linkto: "https://wa.me/34644051404",
  },

  {
    icon: <EmailIcon />,
    name: "Email",
    linkto: "mailto:info@frivero.com.ar",
  },

  {
    icon: <DescriptionIcon />,
    name: "Resume",
    linkto:
      "https://drive.google.com/file/d/1IZE5_PiTIhbCTplWN5SwTuhGHwvScKax/view?usp=drive_link",
  },
];

const MediaContact: React.FC = () => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography variant="h4" color="grey" gutterBottom>
        |
      </Typography>
      <Stack
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="info"
      >
        {actions.map((action) => {
          return (
            <Tooltip
              key={`FooterMedia${action.name}`}
              title={action.name}
              placement="left"
            >
              <IconButton
                color="inherit"
                key={action.name}
                sx={{
                  opacity: 0.5,
                  borderBottom: "0px solid transparent",
                  transition: "opacity 0.3s ease-in", // Transición suave para el efecto de borde
                  "&:hover": {
                    opacity: 1,
                    transitionDelay: "0.05s",
                    cursor: "pointer",
                  },
                  size: "small",
                }}
                onClick={() => handleLink(action.linkto)}
              >
                {action.icon}
              </IconButton>
            </Tooltip>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MediaContact;
