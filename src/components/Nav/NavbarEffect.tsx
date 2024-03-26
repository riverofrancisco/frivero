import * as React from "react";
import { useScrollTrigger } from "@mui/material";


interface Props {
    window?: () => Window;
    children: React.ReactNode
  };
  
export default function ElevationScroll(props: Props) {
    const { children, window } = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children as React.ReactElement, {
      elevation: trigger ? 4 : 0,
    });
  }

