import React from "react";
import {
  Typography,
  Link,
  Button,
  ListItemIcon,
  Tooltip,
} from "@mui/material/";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import LOGO from "../Nav/LOGOnavbar.png";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DescriptionIcon from '@mui/icons-material/Description';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
  {
    icon: <WhatsAppIcon />,
    name: "WhatsApp",
    linkto: "https://wa.me/34644051404",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    linkto: "mailto:franciscojose.rivero.ar@gmail.com",
  },
  {
    icon: <DescriptionIcon />,
    name: "Resume",
    linkto:
      "https://drive.google.com/file/d/1_bXi_ABg5Uy1yKdoZTXetTf_gQ-_LVKG/view?usp=sharing",
  },
];

const Footer: React.FC = () => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <footer>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgcolor="#4C5D73"
        color="white"
        py={4}
        px="10%"
      >
        <Box display="flex" justifySelf="center">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: "none", sm: "flex" },
              fontWeight: { sm: 700 },
              letterSpacing: { sm: ".2rem" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Francisco Rivero
          </Typography>
          <Box
            ml={0.5}
            sx={{
              display: "flex",
            }}
          >
            <img width={16} src={LOGO} alt="logo" />
          </Box>
        </Box>

        <Stack display="flex" flexDirection="row" alignItems="center">
          {actions.map((action) => {
            return (
              <Tooltip key={`FooterMedia${action.name}`} title={action.name} placement="top">
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
    </footer>
  );
};

export default Footer;
