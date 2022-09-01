import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

interface IAlert {
  option: string | undefined;
  isAlertOpen: boolean;
  setIsAlertOpen: (isAlertOpen: boolean) => void;
}
const SimpleSnackbar = ({ option, isAlertOpen, setIsAlertOpen }: IAlert) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlertOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {option === "success" ? (
          <Alert onClose={handleClose} severity="success">
            Todo 추가 완료!
          </Alert>
        ) : option === "update" ? (
          <Alert onClose={handleClose} severity="success">
            Todo 업데이트 완료!
          </Alert>
        ) : (
          <Alert severity="error">error! 제목이 비었는지 확인해주세요 </Alert>
        )}
      </Snackbar>
    </Stack>
  );
};

export default SimpleSnackbar;
