import React, { useState } from "react";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "./NavItem";
import mainLogo from "../../assets/images/logo_main.png";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { SelectLang } from "../../components/SelectLang";

const { home, predictions, daily, math } = NAVBAR_PAGES;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languageHandler = (e) => {
    const lang = e.target.value;
    changeLanguage(lang);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav_bar">
      <div className="main_logo_wrapper">
        <img src={mainLogo} alt="main_logo" />
      </div>
      <ul className={`nav_menu ${isOpen && "open"}`}>
        <NavItem label={home.label} link={home.link} onclose={onClose} />
        <NavItem
          label={predictions.label}
          link={predictions.link}
          onclose={onClose}
        />
        <NavItem label={daily.label} link={daily.link} onclose={onClose} />
        <NavItem label={math.label} link={math.link} onclose={onClose} />
      </ul>

      <SelectLang languageHandler={languageHandler} />

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar "></div>
      </div>
    </nav>
  );
};
