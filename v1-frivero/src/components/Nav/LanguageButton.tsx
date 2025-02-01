import { Button, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { LanguageSwitcher } from "../../redux/portfolio/actions";

const LanguageButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.global.language);
  const [isEnglish, setIsEnglish] = useState(true);

  const handleLanguage = () => {
    dispatch(LanguageSwitcher());
    console.log(currentLanguage);
    setIsEnglish(!isEnglish);

    // Lógica para cambiar el idioma aquí
  };

  return (
    <IconButton
      color={"inherit"}
      onClick={handleLanguage}
      size="small"
      sx={{ p: 1.5, my: 0.5 }}
    >
      {currentLanguage}
    </IconButton>
  );
};

export default LanguageButton;
