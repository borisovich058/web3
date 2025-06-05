import React, { children } from "react";

import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "@shared/assets/icons/theme-light.svg";
import DarkIcon from "@shared/assets/icons/theme-dark.svg";
import Button, { ThemeButton } from "../Button/Button";

import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme";
import { Theme } from "@/app/providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "@/shared/lib/classNames";

interface ThemeSwitcherProps {
  className?: string;
}
const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme();
  const { className, children, ...otherProps } = props;

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className, theme])}
      {...otherProps}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <img src={DarkIcon} alt="Logo" /> : <img src={LightIcon} />}
    </Button>
  );
};

export default ThemeSwitcher;
