import { Add, ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  Collapse,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { FC, PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { MenuDataType } from "./menu-utils";

const SidebarMenuItem: FC<
  PropsWithChildren<{
    isActive?: boolean;
    data?: MenuDataType;
    isRoot?: boolean;
    onClick?: () => void;
  }>
> = ({
  data = { icon: <Add />, path: "", label: "" } as MenuDataType,
  isActive = false,
  isRoot = false,
  onClick = () => null,
}) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = (data?.children?.length ?? 0) > 0;

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    if (data?.path) {
      navigate(data?.path);
      onClick();
    } else {
      setIsOpen((s) => !s);
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
      ) : isRoot ? (
        <Tooltip title={data?.label ?? ""} arrow placement="right">
          {/* <MenuItem onClick={handleClick} sx={{ py: 1.5 }} divider>
            {data?.icon ?? null}
          </MenuItem> */}
          <MenuItem onClick={handleClick} sx={{ py: 1.5 }} divider>
            {data?.icon ? (
              <ListItemIcon color="inherit">{data?.icon}</ListItemIcon>
            ) : null}
            <ListItemText color="inherit">{data?.label ?? ""}</ListItemText>
          </MenuItem>
        </Tooltip>
      ) : (
        <MenuItem onClick={handleClick}>
          {data?.icon ? <ListItemIcon>{data?.icon}</ListItemIcon> : null}
          <ListItemText>
            {data?.label ?? ""}
            {hasChildren ? (
              <span style={{ textAlign: "right" }}>
                {isOpen ? <ArrowUpward /> : <ArrowDownward />}
              </span>
            ) : null}
          </ListItemText>
        </MenuItem>
      )}

      {hasChildren ? (
        <Collapse in={isOpen}>
          <MenuList sx={{ pl: 1 }}>
            <SidebarMenu data={data?.children} />
          </MenuList>
        </Collapse>
      ) : null}
    </React.Fragment>
  );
};

export default SidebarMenuItem;
