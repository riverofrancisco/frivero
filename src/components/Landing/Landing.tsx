import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material/";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { ProfileIMG } from "../../data/data";
import MediaContact from "../Actions/Contact/MediaContact";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DescriptionIcon from "@mui/icons-material/Description";

const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.visits);
  const currentLanguage = useAppSelector((state) => state.global.language);
  const mode = useAppSelector((state) => state.global.mode);
  const [id, setId] = useState("Home");

  //copyEmail
  const [open, setOpen] = React.useState(false);

  const emailRef = useRef<HTMLInputElement>(null);

  const handleCopyClick = () => {
    if (emailRef.current) {
      const range = document.createRange();
      range.selectNode(emailRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
    }
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };
  //linkto
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

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

            <Paper
              sx={{
                py: 1,
                px: {xs:1, md:2},
                m: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography  >
                <span ref={emailRef}>
                  franciscojose.rivero.ar@gmail.com
                </span>
              </Typography>
              <Tooltip open={open} placement="bottom-start" title="Copied">
                <IconButton
                  sx={{
                    size: "small",
                  }}
                  onClick={handleCopyClick}
                >
                  <ContentCopyRoundedIcon />
                </IconButton>
              </Tooltip>
              <IconButton
                sx={{
                  size: "small",
                  display:{xs: "none", sm: "flex"}
                }}
                onClick={() =>
                  handleLink(
                    "https://drive.google.com/file/d/1_bXi_ABg5Uy1yKdoZTXetTf_gQ-_LVKG/view?usp=sharing"
                  )
                }
              >
                <DescriptionIcon />
              </IconButton>
            </Paper>
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
          
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          border={4}
          borderColor="white"
          boxShadow={2}
          sx={{
            width:{xs:"65%", sm: "45%", md:"50%"},
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
