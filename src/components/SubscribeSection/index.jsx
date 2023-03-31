import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup, Input } from "reactstrap";
import { langContext } from "../../context";
import "./styles.css";

export const Subscribe = () => {
  const { lang } = useContext(langContext);
  const { t } = useTranslation();
  return (
    <div className="subscribe_wrapper">
      <div className="subscibe_header">
        <h3>{t("subscribe.subsHead")}</h3>
        <p>{t("subscribe.subDesc")}</p>
      </div>
      <div className="subscribe_main">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Input
            className="subscribe_mail_input"
            placeholder={t("subscribe.email")}
          />
          <Button className="subscribe_mail_button" style={{}}>
            {t("subscribe.subComf")}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
