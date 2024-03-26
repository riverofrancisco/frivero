import React, { useEffect, useState, useRef } from "react";
import Card from "./skillCard";
import { Skeleton, Typography, Box, Grid } from "@mui/material";
import { useAppSelector } from "../../hooks/hooksRedux";
import CardLoader from "./skillLoader";
import { Skill } from "../../interfaces/interfaces";

interface Props {
  refresh: any;
}

const TechSkills = ({ refresh }: Props) => {
  const currentSkills = useAppSelector((state) => state.global.skills.list);
  const techSkills = currentSkills.filter((skill) => skill.type === "tech");

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
    <Grid container sx={{ py: { xs: 3, lg: 6 } }}>
      <Grid
        item
        display="flex"
        alignItems="center"
        /*     border={1} */
        height="100%"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignSelf="center"
        >
          {isLoading
            ? techSkills.map((sk: any) => {
                return <CardLoader key={`${sk.name.en}${sk.id}`} />;
              })
            : techSkills.map((sk: any) => {
                return <Card key={`${sk.id}${sk.name.en}`} skill={sk} refresh={refresh} />;
              })}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TechSkills;
