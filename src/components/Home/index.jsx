import React, { useContext } from "react";
import "./styles.css";
import wallUs from "../../assets/images/wall1.jpeg";
import wallAm from "../../assets/images/wall2.jpeg";
import { langContext } from "../../context";

export const Home = () => {
  const { lang } = useContext(langContext);
  console.log(lang);
  const backgroundImage = lang === "en" ? wallUs : wallAm;
  return (
    <div
      className="homepage_main_section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      index
    </div>
  );
};
