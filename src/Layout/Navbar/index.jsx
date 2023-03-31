import React, { useContext, useState } from "react";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "./NavItem";
import mainLogo from "../../assets/images/logo_main.png";
import darkLogo from "../../assets/images/logo_dark.png";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { SelectLang } from "../../components/SelectLang";
import { langContext } from "../../context";
import telegram from "../../assets/images/telegram1.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/Instagram.png";
import tiktok from "../../assets/images/tiktok.jpeg";
import { getWindowDimensions } from "../../helpers/windowSizes.js";

const { home, predictions, daily, math } = NAVBAR_PAGES;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLang } = useContext(langContext);
  const { width } = getWindowDimensions();
  const { i18n, t } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const background = width >= 830 ? mainLogo : darkLogo;
  const languageHandler = (e) => {
    const lang = e.target.value;
    changeLanguage(lang);
    setLang(lang);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav_bar">
      <div className="main_logo_wrapper">
        <img src={background} alt="main_logo" />
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
        <div className="join_us">
          <h6 className="join_us_header_text">{t("header.joinUs")}</h6>
          <div className="social_icons">
            <a href="#" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook_icon" />
            </a>
            <a
              href="https://instagram.com/betset_global?igshid=MWQ2ODkyMjM="
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram_icon" />
            </a>{" "}
            <a
              href="https://www.tiktok.com/@betset_global?_t=8VXGc6ko4ag&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tiktok} alt="tiktok_icon" />
            </a>
            <div className="devider_div"></div>
            <a href="https://t.me/betset_am" target="_blank" rel="noreferrer">
              <img src={telegram} alt="tiktok_icon" />
            </a>
            <p>Telegram</p>
          </div>
        </div>
      </ul>

      <div className="menu_lang">
        <div className="telegram_icon">
          <a href="https://t.me/betset_am" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram_icon" />
          </a>
        </div>
        <SelectLang languageHandler={languageHandler} />
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar "></div>
        </div>
      </div>
    </nav>
  );
};
