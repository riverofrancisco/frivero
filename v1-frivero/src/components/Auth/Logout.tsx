import React from "react";
import Swal from "sweetalert2";
import { logOut } from "../../middlewares/auth/auth";
import { IconButton } from "@mui/material/";
import { useAppDispatch } from "../../hooks/hooksRedux";
import { authSetter } from "../../redux/portfolio/actions";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    try {
      Swal.fire({
        icon: "question",
        title: "Logging Out",
        text: "Are you sure you want to log out?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.value) {
          logOut();
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              dispatch(authSetter(false));
            },
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IconButton color="info" className="muted-button" onClick={handleLogout}>
      <LogoutIcon />
    </IconButton>
  );
};

export default LogoutButton;
