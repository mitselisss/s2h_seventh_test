import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "../../images/logo/logo2.png";
import { useState, useEffect } from "react";
import Footer from "../../components/footer.js";
import Footer2 from "../../components/footer2.js";
import SocialIcons from "../../components/socialIcons.js";

const ResetPasswordMessage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { t } = useTranslation();
  return (
    <div classname="App">
      <header className="App-header">
        <img src={logo} className="Forgot-logo" alt="logo" />
        <div className="password-reset-page">
          <h1
            className="custom-font"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            {t("password_email")}
          </h1>

          <p className="custom-font" style={{ textAlign: "center" }}>
            <p>{t("password_mail_sent")}</p>
            <p>{t("inbox_check_2")}</p>
            <p>{t("reset_pass_link_expires")}</p>
            <p>
              {t("not_receive_message")}{" "}
              <a href="mailto:support@switchtohealthy.eu">
                support@switchtohealthy.eu.
              </a>
            </p>
            <p>{t("thank_you")}</p>
          </p>
        </div>
      </header>
      <SocialIcons />
      <div className="footer-fixed">{isMobile ? <Footer2 /> : <Footer />}</div>
    </div>
  );
};

export default ResetPasswordMessage;
