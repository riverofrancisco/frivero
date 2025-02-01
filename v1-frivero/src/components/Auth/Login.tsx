import React, { useState } from "react";
import "firebase/firestore";
import { useAppDispatch } from "../../hooks/hooksRedux";
import { Link, useNavigate } from "react-router-dom";
import { DialogProps } from "@mui/material/Dialog";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  FilledInput,
  FormHelperText,
  FormControl,
  Switch,
  FormControlLabel,
  Autocomplete,
  Stack,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  Chip,
  Divider,
  Avatar,
} from "@mui/material/";

import { signIn } from "../../middlewares/auth/auth";
import Swal from "sweetalert2";
import LOGO from "../../components/Nav/LOGOnavbar.png";
import { authSetter } from "../../redux/portfolio/actions";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});



const LoginForm: React.FC = () => {
  ///Dialog workflow
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
  const [currentData, setCurrentData] = useState({
    user: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, className } = event.target;
    setCurrentData({
      ...currentData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      signIn(currentData.user, currentData.password).then(() => {
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });  
        dispatch(authSetter(true));
        setCurrentData({
          user: "",
          password: "",
        });
      });
    } catch (error) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incorrect email or password.",
            showConfirmButton: true,
          });
        },
      });
      console.log({ Error: error });
    }
    handleClose();
    console.log(currentData);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }}

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
        <IconButton
          size="small"
          color="inherit"
          onClick={handleClickOpen}
          key="AddSkill"
        >
          <LoginIcon />
        </IconButton>

        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <DialogTitle>Log In</DialogTitle>

            <Box alignSelf="center" mr={2}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider variant="middle" />
          <DialogContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 0, sm: "5%", md: "10%" },
              }}
            >
              <img width={30} src={LOGO} alt="adminPic" />

              <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                label="User / Email"
                name="user"
                value={currentData.user}
                onChange={handleChange}
                autoComplete="user"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={currentData.password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onKeyPress={handleKeyPress}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              value="Login"
              name="Login"
              variant="contained"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
