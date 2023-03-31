import React, { useContext } from "react";
import "./styles.css";
import wallUs from "../../assets/images/wall2.png";
import wallAm from "../../assets/images/wall1.png";
import mobileImg from "../../assets/images/mobile.png";
import { langContext } from "../../context";
import MainGuy from "./MainGuy";
import { Table } from "../Table";
import { Faq } from "./Faq";
import { getWindowDimensions } from "../../helpers/windowSizes";
import { MobileHeadText } from "../MobileHeadText";
import { Subscribe } from "../SubscribeSection";
import { FooterWeb } from "../FooterWeb";
import { FooterMobile } from "../FooterMobile";
import { FooterInfo } from "../FooterInfo";

export const Home = () => {
  const { width } = getWindowDimensions();
  const { lang } = useContext(langContext);
  const backgroundImgWeb = lang === "en" ? wallUs : wallAm;
  const background = width >= 830 ? backgroundImgWeb : mobileImg;
  return (
    <div>
      <div
        className="homepage_main_section"
        style={{ backgroundImage: `url(${background})` }}
      >
        {width >= 830 ? <MainGuy /> : ""}
      </div>
      <Table />
      {width <= 830 ? <MobileHeadText /> : ""}
      <Faq />
      <Subscribe />
      {width >= 830 ? <FooterWeb /> : <FooterMobile />}
      <FooterInfo />
    </div>
  );
};
