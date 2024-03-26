import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import SoftSkills from "./softSkillList";
import TechSkills from "./techSkillList";
import ToolsList from "./toolsList";
import SkillForm from "../Forms/Skills/SkillForm";
import { skillsUpdater } from "../../redux/portfolio/actions";
//import { AllSkills } from "../../data/newData";
import { getSkills } from "../../middlewares/skills/get";
import { emptySkill } from "../../interfaces/interfaces";

const SkillList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [type, setType] = useState("tech"); //true = tech
  const [id, setId] = useState("Skills");
  const currentLanguage = useAppSelector((state) => state.global.language);
  const isAuth = useAppSelector((state) => state.global.isAuth);
  const currentSkill = useAppSelector((state) => state.global.skills.selected);
  /*   const handleSkills = (state: boolean) => {
    setSkills(!state);
  }; */

  const getData = async () => {
    const emp = await getSkills();
    dispatch(skillsUpdater(emp));
  };

  const AllSkills = useAppSelector((state) => state.global.skills.list);

  const [alignment, setAlignment] = React.useState("tech");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setType(newAlignment);
      console.log(type);
    }
  };


  const getLanguage = ()  => {
    if (currentLanguage === "en") {
      setId("Skills");
    } else if (currentLanguage === "es") {
      setId("Habilidades");
    }
  }
  
  useEffect(() => {
    getData();
    getLanguage();
    console.log(AllSkills.length);
  }, [currentLanguage]);

  return (
    <Grid
      container
      id={id}
      width="100%"
      sx={{ my: { xs: 2, md: 10 } }}
      px="10%"
    >
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          width: "90%",
        }}
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
          {currentLanguage == "en" ? "Skills" : "Habilidades"}
        </Typography>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Platform"
          sx={{ m: 4, borderRadius: 15 }}
        >
          <ToggleButton value="tech">
            {currentLanguage == "en" ? "TECH" : "TÉCNICAS"}
          </ToggleButton>
          <ToggleButton value="soft">
            {currentLanguage == "en" ? "SOFT" : "BLANDAS"}
          </ToggleButton>
          <ToggleButton value="tool">
            {currentLanguage == "en" ? "TOOLS" : "HERRAMIENTAS"}
          </ToggleButton>
          {/*  <ToggleButton value="tools">{currentLanguage == "en" ? "TOOLS" : "HERRAMIENTAS"}</ToggleButton> */}
        </ToggleButtonGroup>
        <Box alignSelf="center">{isAuth && <SkillForm skill={emptySkill} refresh={getData} currentLanguage={currentLanguage} isEditing={false}/>}</Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        {type === "tech" && <TechSkills refresh={getData} />}
        {type === "soft" && <SoftSkills refresh={getData} />}
        {type === "tool" && <ToolsList refresh={getData} />}
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
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
          {currentLanguage == "en" ? "Skills" : "Habilidades"}
        </Typography>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="Platform"
          sx={{ m: 4, borderRadius: 15 }}
        >
          <ToggleButton value="tech">
            {currentLanguage == "en" ? "TECH" : "TÉCNICAS"}
          </ToggleButton>
          <ToggleButton value="soft">
            {currentLanguage == "en" ? "SOFT" : "BLANDAS"}
          </ToggleButton>
          <ToggleButton value="tool">
            {currentLanguage == "en" ? "TOOLS" : "HERRAMIENTAS"}
          </ToggleButton>
        </ToggleButtonGroup>
        <Box alignSelf="center">{isAuth && <SkillForm skill={emptySkill} refresh={getData} currentLanguage={currentLanguage} isEditing={false}/>}</Box>
      </Grid>
    </Grid>
  );
};

export default SkillList;
