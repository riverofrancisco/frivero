import React, { useState, useEffect } from "react";
import Card from "./skillCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../hooks/hooksRedux";
import CardLoader from "./skillLoader";
import { Skill } from "../../interfaces/interfaces";

interface Props {
  refresh: any
}


const SoftSkills = ({refresh}: Props) => {
  const currentSkills = useAppSelector((state)=> state.global.skills.list);
  const softSkills = currentSkills.filter((skill)=> skill.type === "soft")

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  React.useEffect(() => {

    const fakeImageLoadingTimeout = setTimeout(() => {
      handleImageLoad();
    }, 1300); 

    return () => {
      clearTimeout(fakeImageLoadingTimeout); 
    };


  });

  return (
    <Grid container sx={{ py: 4 }}>
      <Grid item width="100%" display="flex" /*  border={1} */>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        > {isLoading
          ? softSkills.map((sk: any) => {
              return (
               <CardLoader key={sk.id}/>
              );
            })
          : softSkills.map((sk: any) => {
            return <Card key={sk.id} skill={sk} refresh={refresh}/>;
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SoftSkills;
