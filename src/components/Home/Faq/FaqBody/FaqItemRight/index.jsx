import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { FaqItem } from "../FaqItem";
import { useTranslation } from "react-i18next";

export const FaqItemRight = () => {
  const { t } = useTranslation();
  return (
    <div className="faq_item">
      <FaqItem head={t("faq.faq6q")} body={t("faq.faq6a")} />
      <FaqItem head={t("faq.faq7q")} body={t("faq.faq7a")} />
      <FaqItem head={t("faq.faq8q")} body={t("faq.faq8a")} />
      <FaqItem head={t("faq.faq9q")} body={t("faq.faq9a")} />
      <FaqItem head={t("faq.faq10q")} body={t("faq.faq10a")} />
    </div>
  );
};
