import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../../hooks/hooksRedux";
import { Typography } from "@mui/material";

import "./Title.css";

interface Props {
  mode: string;
}

const TitleAnimated: React.FC = () => {
  const mode = useAppSelector((state) => state.global.mode);
  const [colorClass, setColorClass] = useState("darkmodeTXT");

  const handleColor = (current: string) => {
    current == "dark"
      ? setColorClass("darkmodeTXT")
      : setColorClass("lightmodeTXT");
  };

  useEffect(() => {
    handleColor(mode);
  }, [mode]);
  return (
    <Typography key="titleText">
      <svg viewBox="0 0 1320 300">
        <text
          x="50%"
          y="50%"
          dy=".35em"
          className={colorClass}
          text-anchor="middle"
        >
          Francisco Rivero
        </text>
      </svg>
    </Typography>
  );
};

export default TitleAnimated;
