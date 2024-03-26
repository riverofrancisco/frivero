import * as React from 'react';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export enum Colours {
  Celeste = '#75AADB',
  CelesteDark = "#4C5D73",
  Blanco = '#FFFFFF',
  Amarillo = '#FFD500',
  GrisOscuro = '#333333',
  GrisMedio = '#7E7E7E',
  GrisClaro = '#CFCFCF',
  GrisFondoLight = '#eeeeee',
  BlancoGrisaceo = '#DBDEDF',
  Negro = '#000000',
  BoxLight = '#FFA000', // Color de la Box en tema claro
  BoxDark = '#E91E63',
  PaperDark = '#545454',
  PaperLight = '#dbdbdb',
  Success = "#0597F2"
}




export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: 'Futura PT, Segoe UI, Segoe UI Emoji',
    subtitle1: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 700
    }, // Reemplaza 'sans-serif' con una fuente de respaldo
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {main: Colours.Celeste},
          secondary: {main: Colours.Amarillo},
          info: {main: Colours.CelesteDark},
          success: {main: Colours.Success},
          divider: Colours.GrisClaro,
          text: {
            primary: Colours.GrisOscuro,
            secondary: Colours.Celeste,
          },
          background: {
            default: Colours.GrisFondoLight,
            paper: Colours.PaperLight,
          },
          appBar: {main: Colours.Celeste},

        }
      : {
          // palette values for dark mode
          primary: {main: Colours.Negro},
          secondary: {main: Colours.Blanco},
          info: {main: Colours.GrisClaro},
          success: {main: Colours.Success},
          divider: Colours.GrisMedio,
          text: {
            primary: Colours.Blanco,
            secondary: Colours.GrisMedio,
          },
          background: {
            default: Colours.GrisOscuro,   
           // paper: Colours.PaperDark,         
          },
          appBar: {main: Colours.Negro}

        }),
  },
});
