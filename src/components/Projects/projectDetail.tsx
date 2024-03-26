import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Chip,
  Divider,
} from "@mui/material/";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Project } from "../../data/data";

import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SortableItem } from "../../interfaces/interfaces";

interface Props {
  project: any;
  currentLanguage: string;
}

export default function ProjectDetail({ project, currentLanguage }: Props) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <IconButton
        size="small"
        sx={{ m: 0.5 }}
        color="inherit"
        onClick={handleClickOpen}
      >
        <MoreVertIcon />
      </IconButton>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{project.name[currentLanguage]}</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
            }}
          >
            {" "}
            <Box
              display="flex"
              justifySelf="center"
              flexWrap="wrap"
              sx={{ py: 1 }}
            >
              {project.tech[currentLanguage].map((tech: SortableItem) => {
                return (
                  <Chip
                    key={`Detail${tech.id}`}
                    label={tech.name}
                    size="small"
                    sx={{ m: 0.5 }}
                  />
                );
              })}
            </Box>
            <Divider variant="fullWidth" />
            <Box mt={1}>
              <Typography variant="body2">
                {project.description[currentLanguage]}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <IconButton
            size="small"
            sx={{ m: 0.5 }}
            onClick={() => handleLink(project.video)}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ m: 0.5 }}
            onClick={() => handleLink(project.link)}
          >
            <OpenInNewIcon />
          </IconButton>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
