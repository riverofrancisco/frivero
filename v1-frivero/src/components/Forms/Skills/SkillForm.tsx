import React, { useState } from "react";
import "firebase/firestore";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { skillsUpdater } from "../../../redux/portfolio/actions";
import { DialogProps } from "@mui/material/Dialog";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  TextField,
  Button,
  Autocomplete,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Divider,
  Input
} from "@mui/material/";

import {
  Skill,
  emptyLanguages,
  emptySkill,
} from "../../../interfaces/interfaces";
import { setSkill } from "../../../middlewares/skills/edit";
import { addSkill } from "../../../middlewares/skills/add";

///UPLOAD IMAGE
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import UploadIcon from "@mui/icons-material/Upload";

interface Props {
  skill: any;
  refresh: any,
  isEditing: boolean;
  currentLanguage: string
}

const SkillForm = ({ skill, refresh ,isEditing,
  currentLanguage}: Props) => {
  ///Dialog workflow
  const ID = skill.id
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  ////////////////////////////////////

  //Form Workflow
  const defaultType = {
    options: ["tech", "soft", "tool"],
    getOptionLabel: (option: any) => option,
  };
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.global.skills.list);

  const [currentData, setCurrentData] = useState(skill);
  

  const handleTypeChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setCurrentData({
      ...currentData,
      type: value as "tech" | "soft" | "tool", // Asigna un valor predeterminado en caso de que newValue sea nulo
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name.includes(".")) {
      const [parentProperty, childProperty] = name.split(".");
      setCurrentData((currentData: any) => ({
        ...currentData,
        [parentProperty]: {
          ...currentData[parentProperty],
          [childProperty]: value,
        },
      }));
    } else {
      setCurrentData({
        ...currentData,
        [name]: value,
      });
    }
  };

  //UPLOAD IMAGE
  const [imagePreview, setImagePreview] = useState("");
  const storage = getStorage();
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name } = event.target;
    const files = event.target.files;
    if (files && files[0]) {
      const imageFile = files[0];
      const storageRef = ref(storage, `images/${imageFile.name}`);

      try {
        await uploadBytes(storageRef, imageFile);
        const imageUrl = await getDownloadURL(storageRef);
        if (imageUrl) {
          setCurrentData({
            ...currentData,
            [name]: imageUrl,
          });
          setImagePreview(imageUrl);
        }
      } catch (error) {
        console.error("Error al subir la imagen: ", error);
      }
    }
    console.log(currentData);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isEditing) {
    console.log(currentData)
    setSkill(ID, currentData);
    refresh();
    handleClose();
    setCurrentData(emptySkill);
  } else { 
    const newSkills = [...skills, currentData];
    dispatch(skillsUpdater(newSkills));
    addSkill(currentData);
    handleClose();
    setCurrentData(emptySkill);
  }
  };

  React.useEffect(() => {
    if (open) {
      setCurrentData({
        ...currentData,
      });
    }
  }, [currentData]);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
      {isEditing ? ( <Box
          onClick={handleClickOpen}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ModeEditIcon />
          Update
        </Box>
         ) : (<Fab size="medium" color="info" aria-label="add"  onClick={handleClickOpen}>
         <AddIcon />
       </Fab>
         )}
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>

            <DialogTitle>{isEditing ? <Typography>{currentLanguage === "en" ? "Update Skill" : "Actualizar Habilidad"}</Typography>: <Typography>{currentLanguage === "en" ? "New Skill" : "Nueva Habilidad"}</Typography>}</DialogTitle>

            <Box alignSelf="center" mr={2}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider variant="middle" />
          <DialogContent>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <Box my={2}>
                  English
                  <TextField
                    label="Name"
                    type="text"
                    name="name.en"
                    value={currentData.name.en}
                    onChange={handleChange}
                    variant="standard"
                    sx={{ width: "97%" }}
                    size="small"
                    required
                  />
                </Box>
                <Box my={2}>
                  Spanish
                  <TextField
                    label="Nombre"
                    type="text"
                    name="name.es"
                    value={currentData.name.es}
                    onChange={handleChange}
                    variant="standard"
                    sx={{ width: "97%" }}
                    size="small"
                    required
                  />
                </Box>
                <Box my={2}>
                  <Autocomplete
                    {...defaultType}
                    openOnFocus
                    options={defaultType.options}
                    value={currentData.type}
                    onChange={handleTypeChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Type"
                        name="type"
                        variant="filled"
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Box display="flex">
                  <IconButton component="label">
                    <Input
                      type="file"
                      hidden
                      sx={{ display: "none" }}
                      name="imageLight"
                      onChange={handleImageUpload}
                    />
                    <UploadIcon />
                  </IconButton>
                  <TextField
                    label="Image URL"
                    type="text"
                    name="imageLight"
                    value={currentData.imageLight}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ width: "90%" }}
                    size="small"
                    required
                  />
                </Box>

                <Box
                  p={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    width={"90%"}
                    src={
                      currentData.imageLight
                        ? currentData.imageLight
                        : "https://icons.veryicon.com/png/o/miscellaneous/smarteditor/quick-view.png"
                    }
                    alt="preview"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box display="flex">
                  <IconButton component="label">
                    <Input
                      type="file"
                      hidden
                      sx={{ display: "none" }}
                      name="imageDark"
                      onChange={handleImageUpload}
                    />
                    <UploadIcon />
                  </IconButton>
                  <TextField
                    label="DarkMode Image URL"
                    type="text"
                    name="imageDark"
                    value={currentData.imageDark}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    sx={{ width: "90%" }}
                    required
                  />
                </Box>

                <Box
                  p={1}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    width={"90%"}
                    src={
                      currentData.imageDark
                        ? currentData.imageDark
                        : "https://icons.veryicon.com/png/o/miscellaneous/smarteditor/quick-view.png"
                    }
                    alt="preview"
                  />
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </React.Fragment>
  );
};

export default SkillForm;
