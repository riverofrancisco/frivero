import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { Adder } from "../../redux/portfolio/actions";
import Button from "@mui/material/Button";
import { ProfileIMG } from "../../data/data";
import Avatar from "@mui/material/Avatar";
import SocialMediaSpeedDial from "../Actions/Contact/LandingAnimation";

import TitleAnimated from "./Title/Title";
import Title from "./Title/Title";
import MediaContact from "../Actions/Contact/MediaContact";

const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.visits);
  const currentLanguage = useAppSelector((state) => state.global.language);
  const mode = useAppSelector((state) => state.global.mode);
  const [id, setId] = useState("Home");

  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState("100%");
  const [idLimit, setIdLimit] = useState("Contact");
  const handleLimit = () => {
    if (currentLanguage === "en") {
      setId("Home");
      setIdLimit("Contact");
    } else if (currentLanguage === "es") {
      setId("Inicio");
      setIdLimit("Contacto");
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const targetElement: HTMLElement | null = document.getElementById(idLimit);
    if (targetElement) {
      const hidePosition = targetElement.offsetTop - 400;
      hidePosition && setIsVisible(scrollPosition < hidePosition);

      const diference = hidePosition - scrollPosition;
      if (diference > 200) {
        setOpacity("100%");
      } else {
        const newOpacity = (diference * 100) / 200;
        setOpacity(`${newOpacity}%`);
      }
    }
  };

  useEffect(() => {
    handleLimit();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Grid container direction="row" sx={{ height: "100vh", px: "10%" }} id={id}>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ py: { xs: 3, md: 6 }, pt: { sm: 12 } }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ py: { sx: 0, md: 10, lg: 20 } }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { md: "flex" },
                pt: { xs: 15, sm: 0 },
                fontWeight: 700,
                letterSpacing: { sm: ".2rem" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Francisco Rivero
            </Typography>

            <Typography variant="subtitle1">
              {currentLanguage === "en"
                ? "FullStack Web Developer"
                : "Desarrollador Web Full Stack"}
            </Typography>

            <Box p={2} alignSelf="start" width="100%">
              <SocialMediaSpeedDial />
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{ py: { xs: 0, md: 10, lg: 20 } }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          border={4}
          borderColor="white"
          boxShadow={2}
          sx={{
            "&:hover": {
              boxShadow: 6,
            },
          }}
        >
          <Avatar
            alt="FR"
            src={ProfileIMG}
            sx={{
              width: "100%",
              height: "100%",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                boxShadow: 3,
                transform: "scale(1.05)",
                transitionDelay: "0.05s",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: isVisible ? "block" : "none",
            opacity: opacity,
            position: "fixed",
            top: "50%",
            right: { xs: 0, sm: "5%", md: "10%" },
            transform: "translateY(-50%)",
            zIndex: 1000,
          }}
        >
          <MediaContact />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
