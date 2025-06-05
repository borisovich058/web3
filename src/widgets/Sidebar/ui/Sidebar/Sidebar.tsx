import React, { useState } from "react";
import cls from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames";


interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const ontToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={ontToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/**switch */}
      </div>
    </div>
  );
};

export default Sidebar;
