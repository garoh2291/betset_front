import React from "react";
import { useTranslation } from "react-i18next";
import mainLogo from "../../assets/images/logo_main.png";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "../../Layout/Navbar/NavItem";
import { GetInTouch } from "../GetInTouch";

import "./styles.css";

const { home, predictions, daily, math } = NAVBAR_PAGES;

export const FooterWeb = () => {
  const { t } = useTranslation();
  return (
    <div className="web_footer_section">
      <div className="footer_main_info">
        <img src={mainLogo} alt="main-logo" />
        <div className="footer_info_text">{t("footer.mainText")}</div>
      </div>
      <div className="footer_link_section">
        <p className="footer_links_head">{t("footer.links")}</p>
        <ul>
          <NavItem label={home.label} link={home.link} />
          <NavItem label={predictions.label} link={predictions.link} />
          <NavItem label={daily.label} link={daily.link} />
          <NavItem label={math.label} link={math.link} />
        </ul>
      </div>
      <div className="web_footer_touch">
        <GetInTouch />
      </div>
    </div>
  );
};
