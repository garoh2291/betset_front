import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavItem = ({ label, link, onclose }) => {
  const { t } = useTranslation();

  return (
    <li>
      <NavLink
        onClick={onclose}
        to={`/${link}`}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {t(`header.${label}`)}
      </NavLink>
    </li>
  );
};
