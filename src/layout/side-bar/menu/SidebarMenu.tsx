import { FC, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import SidebarMenuItem from "./SidebarMenuItem";
import { MenuDataType } from "./menu-utils";

const SidebarMenu: FC<
  PropsWithChildren<{
    data?: Array<MenuDataType>;
    iconOnly?: boolean;
    onClick?: (v: MenuDataType, vIndex: number) => void;
  }>
> = ({
  data = [] as Array<MenuDataType>,
  iconOnly = false,
  onClick = () => null,
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {data.map((item, itemIndex) => {
        return (
          <SidebarMenuItem
            key={itemIndex}
            isActive={item.path === pathname}
            data={item}
            iconOnly={iconOnly}
            onClick={() => onClick(item, itemIndex)}
          />
        );
      })}
    </>
  );
};

export default SidebarMenu;
