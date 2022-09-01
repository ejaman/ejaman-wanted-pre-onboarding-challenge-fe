import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ToDoAPI } from "../apis/ToDo";
import SimpleSnackbar from "./SimpleSnackbar";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

interface IisOpen {
  list: string;
  token: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleDelete: (id: string) => void;
}

const AlertDialog = ({
  list,
  token,
  isOpen,
  setIsOpen,
  handleDelete,
}: IisOpen) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const onhandleDelete = () => {
    setIsOpen(!isOpen); // dialog state
    handleDelete(list);
    ToDoAPI.del(list, token);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"TODO Delete Confirm "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            정말 삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onhandleDelete}>네</Button>
          <Button onClick={handleClose} autoFocus>
            아니오
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AlertDialog;
