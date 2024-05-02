import { Close, Done } from "@mui/icons-material";
import {
  Breakpoint,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";

const ModalContainer: FC<
  PropsWithChildren<{
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    maxWidth?: Breakpoint;
    okButtonLabel?: string;
    onOk?: () => void;
  }>
> = ({
  isOpen = false,
  maxWidth = "sm",
  title = "",
  onClose = () => null,
  children = null,

  okButtonLabel = "Ok",
  onOk,
}) => {
  return (
    <Dialog open={isOpen} fullWidth maxWidth={maxWidth} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <div>{children}</div>
      </DialogContent>
      <DialogActions>
        {typeof onOk === "function" ? (
          <Button
            onClick={onOk}
            startIcon={<Done />}
            size="small"
            color="primary"
            sx={{ mr: 1 }}
            variant="outlined"
          >
            {okButtonLabel}
          </Button>
        ) : null}
        <Button
          color="inherit"
          onClick={onClose}
          startIcon={<Close />}
          size="small"
          variant="outlined"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalContainer;
