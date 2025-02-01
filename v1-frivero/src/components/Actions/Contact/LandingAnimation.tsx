import * as React from "react";
import { styled } from "@mui/material/styles";
import {Box, Backdrop, SpeedDialAction} from "@mui/material/";

import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from "@mui/material";


const StyledSpeedDial: React.ElementType<SpeedDialProps> = styled(SpeedDial)(
  ({ theme }) => ({
  
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  })
);

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    linkto: "https://www.linkedin.com/in/rivero-francisco/",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    linkto: "https://github.com/riverofrancisco",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    linkto: "mailto:franciscojose.rivero.ar@gmail.com",
  },
  {
    icon: <DescriptionIcon />,
    name: "Resume",
    linkto:
      "https://drive.google.com/file/d/1IZE5_PiTIhbCTplWN5SwTuhGHwvScKax/view?usp=drive_link",
  },
];

export default function SocialMediaSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      
      
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        onClose={handleClose}
        onOpen={handleOpen}
        icon={<PersonRoundedIcon />}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
          
            icon={action.icon}
            key={action.name}
            tooltipTitle={action.name}
            tooltipPlacement="bottom"
            onClick={() => handleLink(action.linkto)}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
