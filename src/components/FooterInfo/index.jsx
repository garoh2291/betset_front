import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles.css";

export const FooterInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="footer_info_last">
      <Link to={"/privacy"}>{t("footer.privacy")}</Link>
      <p>{t("footer.betset")}</p>
    </div>
  );
};
