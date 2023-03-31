import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

export const MobileHeadText = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile_text_wrapper">
      <h3>
        {`${t("main.prediction1")} ${t("main.prediction2")} ${t(
          "main.prediction3"
        )}`}
      </h3>
      <p>{t("main.prediction4")}</p>
    </div>
  );
};
