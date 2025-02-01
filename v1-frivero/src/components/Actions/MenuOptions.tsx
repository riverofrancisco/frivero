import * as React from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Menu, MenuItem, Divider } from "@mui/material/";
import { MenuProps } from "@mui/material/Menu";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { skillsUpdater } from "../../redux/portfolio/actions";
import { deleteSkill } from "../../middlewares/skills/delete";


interface Props {
  id: string;
  updateform?: any;
}

export const MenuOptionsSkill = ({ id, updateform }: Props) => {
  /////STATES
  const ID = id;
  const dispatch = useAppDispatch();
  const skills = useAppSelector((state) => state.global.skills.list);

  /////FUNCTIONALITY MENU
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
   
  };

  const handleDelete = async () => {

    const filteredSkills = skills.filter((skill: any) => skill.id !== ID);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(ID)
        console.log(filteredSkills)
        dispatch(skillsUpdater(filteredSkills));
        deleteSkill(ID);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
    handleClose()
  };

  return (
    <Box>
      <IconButton color="info" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} elevation={5}>
        <MenuItem disableRipple>{updateform}</MenuItem>
        <Divider />
        <MenuItem onClick={handleDelete} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};
