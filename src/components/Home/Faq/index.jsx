import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaqBody } from "./FaqBody";
import "./styles.css";

export const Faq = () => {
  const { t } = useTranslation();
  return (
    <div className="faq_section">
      <div className="faq_head_wrapper">
        <Typography
          sx={{
            fontWeight: "600",
            fontFamily: "var(--unnamed-font-family-poppins)",
            fontSize: { sx: "4vw", md: "4vw", lg: "4vw", xl: "60px" },
            lineHeight: "0.9",
          }}
        >
          <b> {t("faq.head")}</b>
        </Typography>
      </div>
      <FaqBody />
    </div>
  );
};
