import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";
import { FaqItem } from "../FaqItem";
import { useTranslation } from "react-i18next";

export const FaqItemLeft = () => {
  const { t } = useTranslation();
  return (
    <div className="faq_item">
      <FaqItem head={t("faq.faq1q")} body={t("faq.faq1a")} />
      <FaqItem head={t("faq.faq2q")} body={t("faq.faq2a")} />
      <FaqItem head={t("faq.faq3q")} body={t("faq.faq3a")} />
      <FaqItem head={t("faq.faq4q")} body={t("faq.faq4a")} />
      <FaqItem head={t("faq.faq5q")} body={t("faq.faq5a")} />
    </div>
  );
};
