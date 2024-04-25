import { Add } from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { MenuDataType } from "./menu-utils";

const SidebarMenuItem: FC<
  PropsWithChildren<{
    isActive?: boolean;
    data?: MenuDataType;
    iconOnly?: boolean;
    onClick?: () => void;
  }>
> = ({
  data = { icon: <Add />, path: "", label: "" } as MenuDataType,
  isActive = false,
  iconOnly = false,
  onClick = () => null,
}) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (data?.path) {
      navigate(data?.path);
      onClick();
    } else {
      handleOpen(e as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <React.Fragment>
      {data?.isLabel ? (
        <Typography
          sx={{
            py: 0.5,
            mb: 0.25,
            borderBottom: `solid 1px`,
            borderBottomColor: (th) => th.palette.divider,
          }}
          align="center"
        >
          {data?.label ?? ""}
        </Typography>
      ) : iconOnly ? (
        <Tooltip title={data?.label ?? ""} arrow placement="right">
          <MenuItem onClick={handleClick} sx={{ py: 1.5 }} divider>
            {data?.icon ?? null}
          </MenuItem>
        </Tooltip>
      ) : (
        <MenuItem onClick={handleClick}>
          {data?.icon ? <ListItemIcon>{data?.icon}</ListItemIcon> : null}
          <ListItemText>{data?.label ?? ""}</ListItemText>
        </MenuItem>
      )}

      {data?.children ? (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <SidebarMenu data={data?.children} onClick={handleClose} />
        </Menu>
      ) : null}
    </React.Fragment>
  );
};

export default SidebarMenuItem;
