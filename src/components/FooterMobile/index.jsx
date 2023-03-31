import React from "react";
import { useTranslation } from "react-i18next";
import logoMob from "../../assets/images/logo_mobile.png";
import { GetInTouch } from "../GetInTouch";
import "./styles.css";

export const FooterMobile = () => {
  const { t } = useTranslation();
  return (
    <div className="footer_mob_wrapper">
      <div className="footer_mob_info">
        <div className="footer_logo_wrap">
          <img src={logoMob} alt="mobile logo" />
        </div>
        <p className="footer_main_content">{t("footer.mainText")}</p>
      </div>
      <div className="mobile_footer_section_touch">
        <GetInTouch />
      </div>
    </div>
  );
};
