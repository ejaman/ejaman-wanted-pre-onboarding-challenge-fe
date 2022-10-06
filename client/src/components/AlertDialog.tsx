import React, { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { useDeleteToDo } from "../hooks/useTodoQuery";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

interface IisOpen {
  list: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AlertDialog = ({ list, isOpen, setIsOpen }: IisOpen) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const del = useDeleteToDo(list);
  const { mutateAsync, isLoading } = del;

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const onhandleDelete = async () => {
    setIsOpen(!isOpen); // dialog state
    await mutateAsync();
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
