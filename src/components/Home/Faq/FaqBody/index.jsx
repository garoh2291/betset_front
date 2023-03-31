import React from "react";
import { FaqItemLeft } from "./FaqItemLeft";
import { FaqItemRight } from "./FaqItemRight";
import "./styles.css";

export const FaqBody = () => {
  return (
    <div className="faq_body_wrapper">
      <FaqItemLeft />
      <FaqItemRight />
    </div>
  );
};
