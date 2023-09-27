import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import logo from "../../images/logo/logo2.png";
import Footer from "../../components/footer.js";
import Footer2 from "../../components/footer2.js";
import SocialIcons from "../../components/socialIcons.js";

const ActivationMessage = () => {
  const { token } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`activate/${token}`);
        // Handle the response here (e.g., show a success message, redirect, etc.)
      } catch (error) {
        // Handle errors (e.g., show an error message)
        navigate("/expirePage");
      }
    };
    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div classname="App">
      <header className="App-header">
        <img src={logo} className="Forgot-logo" alt="logo" />
        <div className="password-reset-page">
          <h1
            className="custom-font"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            {t("activate_success")}{" "}
          </h1>

          <p className="custom-font" style={{ textAlign: "center" }}>
            <p>{t("congratulations")}</p>
            <p>{t("account_success")}</p>
            <p>{t("login_account")} </p>
            <p>{t("thank_you")}</p>
          </p>
        </div>
        <Link
          to="/"
          className="button-container"
          style={{ textDecoration: "none", fontSize: "large" }}
        >
          {t("Sign_In")}
        </Link>
      </header>
      <SocialIcons />
      <div className="footer-fixed">{isMobile ? <Footer2 /> : <Footer />}</div>
    </div>
  );
};

export default ActivationMessage;
