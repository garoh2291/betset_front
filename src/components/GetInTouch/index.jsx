import React from "react";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import paypal from "../../assets/images/paypal.png";
import "./styles.css";
import { useTranslation } from "react-i18next";

export const GetInTouch = () => {
  const { t } = useTranslation();

  return (
    <div className="footer_touch_wrapper">
      <div className="footer_touch_social">
        <p className="footer_touch_head">{t("footer.touch")}</p>
        <div className="footer_social_icons">
          <a href="#">
            <i class="bx bxl-facebook-square"></i>
          </a>
          <a
            href="https://instagram.com/betset_global?igshid=MWQ2ODkyMjM="
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://www.tiktok.com/@betset_global?_t=8VXGc6ko4ag&_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-tiktok"></i>
          </a>
        </div>
      </div>
      <div className="footer_payments">
        <div className="footer_payment_icon">
          <img src={master} alt="master" />
        </div>
        <div className="footer_payment_icon">
          <img src={paypal} alt="paypal" />
        </div>
        <div className="footer_payment_icon">
          <img src={visa} alt="visa" />
        </div>
      </div>
    </div>
  );
};
