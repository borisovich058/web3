import React from "react";
import { LinkProps } from "react-router-dom";
import cls from "./Navbar.module.scss";


import { classNames } from "@/shared/lib/classNames";
import AppLink from "@/shared/ui/AppLink/AppLink";


interface NavbarProps extends LinkProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink to={"/"} className={classNames(cls.mainLink, {}, [className])}>
          Главная страница
        </AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
