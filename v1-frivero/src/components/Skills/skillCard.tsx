import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography, Badge, IconButton } from "@mui/material";
import { Skill } from "../../data/data";
import Tooltip from "@mui/material/Tooltip";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import SkillForm from "../Forms/Skills/SkillForm";
import { emptySkill } from "../../interfaces/interfaces";
import { deleteSkill } from "../../middlewares/skills/delete";
import DeleteIcon from '@mui/icons-material/Delete';
import { skillsUpdater } from "../../redux/portfolio/actions";
import { MenuOptionsSkill } from "../Actions/MenuOptions";


interface Props {
  skill: any;
  refresh: any
}


const Card = ({ skill, refresh }: Props) => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.global.mode);
  const currentLanguage = useAppSelector((state) => state.global.language);
  const isAuth = useAppSelector((state)=> state.global.isAuth);
  
  const [open, setOpen] = React.useState(false);


 

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      borderRadius={3}
      margin={1}
      p={1}
      boxShadow={15}
      sx={{
        width: { xs: "35%", sm: "23%", md: "17%" },
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          transitionDelay: "0.05s",
          cursor: "pointer",
        },
      }}
      onClick={handleTooltipOpen}
    >
      <Badge  anchorOrigin={{ vertical: 'top', horizontal: 'right' }} badgeContent={ isAuth && <MenuOptionsSkill key={skill.id} id={skill.id} updateform={<SkillForm skill={skill} refresh={refresh} currentLanguage={currentLanguage} isEditing={true}/>}/>}>
        

      <Tooltip
        title={skill.name[currentLanguage]}
        placement="top"
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        open={open}
      >
        {mode == "light" ? (
          <img
            width="100%"
            style={{ borderRadius: "15%" }}
            src={skill.imageLight}
            alt={skill.name}
          />
        ) : (
          <img
            width="100%"
            style={{ borderRadius: "15%" }}
            src={skill.imageDark}
            alt={skill.name}
          />
        )}
      </Tooltip>
    
      </Badge>
    </Box>
  );
};

export default Card;
