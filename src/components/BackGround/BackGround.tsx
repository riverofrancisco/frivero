import React, { useState, useEffect } from "react";

import { Grid, Box, Typography } from "@mui/material/";

import { Background, myBackground as bgES } from "../../data/data";
import { myBackground as bgEN } from "../../data/dataEN";
import BGCard from "./bgCard";
import { Colours } from "../../Theme/theme";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { getBackground } from "../../middlewares/background/get";
import { backgroundUpdater } from "../../redux/portfolio/actions";
import { BgForm } from "../Forms/Background/BgForm";
import { emptyBackground } from "../../interfaces/interfaces";

const BackgroundList = () => {
  const dispatch = useAppDispatch();
  ////GLOBAL STATES
  const allItems = useAppSelector((state) => state.global.background.list);
  const currentLanguage = useAppSelector((state) => state.global.language);
  const isAuth = useAppSelector((state) => state.global.isAuth);

  ///LOCAL STATES
  const [id, setId] = useState("Background");
  //const [bg, setBG] = useState(bgEN);

  const getData = async () => {
    const data = await getBackground();
    dispatch(backgroundUpdater(data));
  };

  /*  const handleBG = () => {
    if (currentLanguage === "en") {
      setBG(bgEN);
    } else if (currentLanguage === "es") {
      setBG(bgES);
    }
  }; */

  React.useEffect(() => {
    if (currentLanguage === "en") {
      setId("Background");
    } else if (currentLanguage === "es") {
      setId("Formacion");
    }
    getData();
    // handleBG();
  }, [currentLanguage]);

  return (
    <Grid
      container
      sx={{ height: "100%", width: "100%", px: "10%" }}
      bgcolor="paper"
      id={id}
      my={7}
    >
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={4}
        sx={{
          mt: { xs: 0, md: 6 },
          mb: { xs: 4, md: 8 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { md: "flex" },
            fontWeight: 700,
            letterSpacing: { sm: ".2rem" },
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {currentLanguage === "en" ? id : "Formación"}
        </Typography>
        {isAuth && (
          <Box p={1} borderRadius="50%">
            <BgForm
              bgItem={emptyBackground}
              currentLanguage={currentLanguage}
              isEditing={false}
              refresh={getData}
            />
          </Box>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 1,
        }}
      >
        {allItems.map((b: any) => {
          return (
            <BGCard
              key={b.degree}
              background={b}
              currentLanguage={currentLanguage}
              refresh={getData}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default BackgroundList;
