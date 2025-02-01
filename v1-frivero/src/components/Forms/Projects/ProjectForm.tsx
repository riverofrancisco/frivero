import React, { useState } from "react";
import "firebase/firestore";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooksRedux";
import { projectsUpdater } from "../../../redux/portfolio/actions";
import { DialogProps } from "@mui/material/Dialog";

//ICONS
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

//MATERIAL
import {
  Box,
  IconButton,
  TextField,
  Button,
  Fab,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Input,
  Tab,
  Tabs,
} from "@mui/material/";

import { SortableItem, emptyProject } from "../../../interfaces/interfaces";

///UPLOAD IMAGE
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import UploadIcon from "@mui/icons-material/Upload";
import Swal from "sweetalert2";
import { setProject } from "../../../middlewares/projects/edit";
import { addProject } from "../../../middlewares/projects/add";

//DINAMIC INPUTS
import { ItemToSort } from "../SortableItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

interface Props {
  project: any;
  refresh: any;
  isEditing: boolean;
  currentLanguage: string;
}

const ProjectForm = ({
  project,
  refresh,
  isEditing,
  currentLanguage,
}: Props) => {
  ///Dialog workflow
  const ID = project.id;
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
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.global.projects.list);

  const [currentData, setCurrentData] = useState(project);

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
      const storageRef = ref(storage, `projects/${imageFile.name}`);

      try {
        await uploadBytes(storageRef, imageFile);
        const imageUrl = await getDownloadURL(storageRef);
        console.log("uploading...");
        if (imageUrl) {
          console.log("uploaded succesfully!");
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
      console.log(currentData);
      setProject(ID, currentData);
      refresh();
      handleClose();
      setCurrentData(emptyProject);
    } else {
      const newData = [...projects, currentData];
      dispatch(projectsUpdater(newData));
      addProject(currentData);
      handleClose();
      setCurrentData(emptyProject);
      console.log(currentData);
    }
  };

  ///DINAMIC INPUTS
  const [currentTech, setCurrentTech] = useState({
    id: 0,
    name: " ",
    language: "en",
  });

  const handleTechChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const chosenLanguage = name.split("-")[0];
    if (currentTech.id !== 0) {
      setCurrentTech({
        ...currentTech,
        name: value,
        language: chosenLanguage,
      });
    } else {
      setCurrentTech({
        id: currentData.tech[chosenLanguage].length + 1,
        name: value,
        language: chosenLanguage,
      });
    }
  };

  const AddNew = () => {
    const chosenLanguage = currentTech.language;
    const newItem = {
      id: currentTech.id,
      name: currentTech.name,
    };
    if (currentData.tech[chosenLanguage].length > 0) {
      const NewData = [...currentData.tech[chosenLanguage], newItem];
      setCurrentData({
        ...currentData,
        tech: { ...currentData.tech, [chosenLanguage]: NewData },
      });
    } else {
      const NewData = [newItem];
      setCurrentData({
        ...currentData,
        tech: { ...currentData.tech, [chosenLanguage]: NewData },
      });
    }
    setCurrentTech({ id: 0, name: "", language: chosenLanguage });
  };

  const DeleteItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id, name } = event.currentTarget;
    const IDtoDelete = id.split("-")[0];
    const chosenLanguage = name.split("-")[0];
    console.log(`ID - ${IDtoDelete}`);
    const newFilteredItems = currentData.tech[chosenLanguage].filter(
      (tech: SortableItem, index: number) => index.toString() !== IDtoDelete
    );

    setCurrentData({
      ...currentData,
      tech: { ...currentData.tech, [chosenLanguage]: newFilteredItems },
    });
  };

  const EditItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id, name } = event.currentTarget;
    const IDtoEdit = id.split("-")[0];
    const chosenLanguage = name.split("-")[0];
    const itemToEdit = {
      id: currentData.tech[chosenLanguage][IDtoEdit].id,
      name: currentData.tech[chosenLanguage][IDtoEdit].name,
      language: chosenLanguage,
    };
    setCurrentTech(itemToEdit);
    DeleteItem(event);
  };

  const [editingLanguage, setEditingLanguage] = useState("en");

  const handleLanguage = (event: React.SyntheticEvent, newValue: number) => {
    const newStringValue = newValue === 0 ? "en" : "es";
    console.log(`Language in edition mode: ${newStringValue}`);
    setEditingLanguage(newStringValue);
  };

  const handleDragEnd = (event: any) => {
    const { active, over, name } = event;

    const oldIndex = currentData.tech[editingLanguage].findIndex(
      (item: any) => item.id === active.id
    );
    const newIndex = currentData.tech[editingLanguage].findIndex(
      (item: any) => item.id === over.id
    );
    const newOrder = arrayMove(
      currentData.tech[editingLanguage],
      oldIndex,
      newIndex
    );

    setCurrentData({
      ...currentData,
      tech: { ...currentData.tech, [editingLanguage]: newOrder },
    });
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
        {isEditing ? (
          <IconButton color="info" onClick={handleClickOpen}>
            <EditIcon />
          </IconButton>
        ) : (
          <Fab
            size="medium"
            color="info"
            aria-label="add"
            onClick={handleClickOpen}
          >
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
            <DialogTitle>New Project</DialogTitle>

            <Box alignSelf="center" mr={2}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider variant="middle" />
          <DialogContent>
            <Grid container>
              <Grid item xs={12} md={6} my={0.5}>
                <TextField
                  label="Name"
                  type="text"
                  name="name.en"
                  value={currentData.name.en}
                  onChange={handleChange}
                  variant="filled"
                  sx={{ width: "97%" }}
                  size="small"
                  required
                />{" "}
              </Grid>
              <Grid item xs={12} md={6} my={0.5}>
                <TextField
                  label="Nombre"
                  type="text"
                  name="name.es"
                  value={currentData.name.es}
                  onChange={handleChange}
                  variant="filled"
                  sx={{ width: "97%" }}
                  size="small"
                  required
                />{" "}
              </Grid>
              <Grid item xs={12} md={6} my={0.5}>
                <TextField
                  label="Period"
                  type="text"
                  name="period.en"
                  value={currentData.period.en}
                  onChange={handleChange}
                  variant="standard"
                  sx={{ width: "97%" }}
                  size="small"
                  required
                />
              </Grid>

              <Grid item xs={12} md={6} my={0.5}>
                <TextField
                  label="Periodo"
                  type="text"
                  name="period.es"
                  value={currentData.period.es}
                  onChange={handleChange}
                  variant="standard"
                  sx={{ width: "97%" }}
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6} my={0.5}>
                <TextField
                  label="Description"
                  type="text"
                  name="description.en"
                  value={currentData.description.en}
                  onChange={handleChange}
                  multiline
                  variant="outlined"
                  sx={{ width: "97%" }}
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6} my={0.5}>
                <TextField
                  label="Descripcion"
                  type="text"
                  name="description.es"
                  value={currentData.description.es}
                  onChange={handleChange}
                  multiline
                  variant="outlined"
                  sx={{ width: "97%" }}
                  size="small"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex">
                  <Box alignSelf="end">
                    <IconButton component="label">
                      <Input
                        type="file"
                        hidden
                        sx={{ display: "none" }}
                        name="image"
                        onChange={handleImageUpload}
                      />
                      <UploadIcon />
                    </IconButton>
                  </Box>
                  <TextField
                    label="Image URL"
                    type="text"
                    name="image"
                    value={currentData.image}
                    onChange={handleChange}
                    variant="standard"
                    sx={{ width: "80%" }}
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
                    width={"80%"}
                    src={
                      currentData.image
                        ? currentData.image
                        : "https://icons.veryicon.com/png/o/miscellaneous/smarteditor/quick-view.png"
                    }
                    alt="preview"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} my={0.5}>
                <Box display="flex">
                  <Box alignSelf="end" mx={1}>
                    <LinkIcon />
                  </Box>
                  <TextField
                    label="Link"
                    type="text"
                    name="link"
                    value={currentData.link}
                    onChange={handleChange}
                    multiline
                    variant="standard"
                    sx={{ width: "80%" }}
                    size="small"
                    required
                  />
                </Box>

                <Box display="flex">
                  <Box alignSelf="end" mx={1}>
                    <YouTubeIcon />
                  </Box>
                  <TextField
                    label="Video"
                    type="text"
                    name="video"
                    value={currentData.video}
                    onChange={handleChange}
                    multiline
                    variant="standard"
                    sx={{ width: "80%" }}
                    size="small"
                    required
                  />
                </Box>
              </Grid>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  typography: "body1",
                }}
              >
                <Tabs
                  value={editingLanguage === "en" ? 0 : 1}
                  sx={{ borderBottom: 1, borderColor: "divider" }}
                  onChange={handleLanguage}
                >
                  <Tab
                    label={`${currentLanguage === "en" ? "English" : "Inglés"}`}
                    value={0}
                  />
                  <Tab
                    label={`${
                      currentLanguage === "en" ? "Spanish" : "Español"
                    }`}
                    value={1}
                  />
                </Tabs>
              </Box>

              {editingLanguage === "en" ? (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Typography m={1}>
                      {currentLanguage === "en"
                        ? "Skills Used"
                        : "Habilidades Usadas"}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { xs: "90%", sm: "50%" },
                        borderBottom: 0.5,
                      }}
                    >
                      <TextField
                        type="text"
                        name="en-NewTech"
                        label="New Tech to Add"
                        value={currentTech.name}
                        onChange={handleTechChange}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            AddNew();
                          }
                        }}
                        size="small"
                        variant="filled"
                        sx={{ m: 1 }}
                      />

                      <IconButton
                        size="small"
                        color="info"
                        onClick={AddNew}
                        sx={{ m: 1 }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  {currentData.tech.en && (
                    <DndContext
                      collisionDetection={closestCenter}
                      onDragEnd={handleDragEnd}
                    >
                      <SortableContext
                        items={currentData.tech.en}
                        strategy={verticalListSortingStrategy}
                      >
                        {currentData.tech.en.map(
                          (tech: SortableItem, index: number) => {
                            return (
                              <Box
                                key={`${tech.id}${tech.name}${index}KEY`}
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                  alignItems: "center",
                                  py: 1,
                                  borderBottom: 0.5,
                                  borderColor: "lightgrey",
                                }}
                              >
                                <Typography>{`${index + 1}°`}</Typography>
                                <ItemToSort item={tech} index={index} />
                                <IconButton
                                  color="info"
                                  name="en-editButton"
                                  id={`${index}-${tech.name}EditionMode`}
                                  onClick={EditItem}
                                >
                                  <EditIcon />
                                </IconButton>
                                <IconButton
                                  color="info"
                                  name="en-deleteButton"
                                  id={`${index}-${tech.name}DeleteMode`}
                                  onClick={DeleteItem}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Box>
                            );
                          }
                        )}
                      </SortableContext>
                    </DndContext>
                  )}
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    <Typography m={1}>
                      {currentLanguage === "en"
                        ? "Skills Used"
                        : "Habilidades Usadas"}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { xs: "90%", sm: "50%" },
                        borderBottom: 0.5,
                      }}
                    >
                      <TextField
                        type="text"
                        name="es-NewTech"
                        label="New Tech to Add"
                        value={currentTech.name}
                        onChange={handleTechChange}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            AddNew();
                          }
                        }}
                        size="small"
                        variant="filled"
                        sx={{ m: 1 }}
                      />

                      <IconButton
                        size="small"
                        color="info"
                        onClick={AddNew}
                        sx={{ m: 1 }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  {currentData.tech.es && (
                    <DndContext
                      collisionDetection={closestCenter}
                      onDragEnd={handleDragEnd}
                    >
                      <SortableContext
                        items={currentData.tech.es}
                        strategy={verticalListSortingStrategy}
                      >
                        {currentData.tech.es.map(
                          (tech: SortableItem, index: number) => {
                            return (
                              <Box
                                key={`${tech.id}${tech.name}${index}KEY`}
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                  alignItems: "center",
                                  py: 1,
                                  borderBottom: 0.5,
                                  borderColor: "lightgrey",
                                }}
                              >
                                <Typography>{`${index + 1}°`}</Typography>
                                <ItemToSort item={tech} index={index} />
                                <IconButton
                                  color="info"
                                  name="es-editButton"
                                  id={`${index}-${tech.name}EditionMode`}
                                  onClick={EditItem}
                                >
                                  <EditIcon />
                                </IconButton>
                                <IconButton
                                  color="info"
                                  name="es-deleteButton"
                                  id={`${index}-${tech.name}DeleteMode`}
                                  onClick={DeleteItem}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Box>
                            );
                          }
                        )}
                      </SortableContext>
                    </DndContext>
                  )}
                </Grid>
              )}
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

export default ProjectForm;
