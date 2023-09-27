import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import axios from "axios";
import logo from "../../images/logo/logo2.png";
import Footer from "../../components/footer.js";
import Footer2 from "../../components/footer2.js";
import SocialIcons from "../../components/socialIcons.js";

const ExpirePage = () => {
  const { token } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`activationEmail/${email}`);
      if (response.status === 200) {
        navigate("/activationPage");
      }
    } catch (error) {
      if (
        error.response.data.error === "No account matches this email address"
      ) {
        setErrorMessage(t("expire_message_error_1"));
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Use "smooth" for smooth scrolling behavior
        });
      }

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`activate/${token}`);
        // Handle the response here (e.g., show a success message, redirect, etc.)
      } catch (error) {
        // Handle errors (e.g., show an error message)
        console.error("Error:", error.response.data.error);
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
    <div>
      <div classname="App">
        <header className="App-header">
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <img src={logo} className="Forgot-logo" alt="logo" />
          <div className="password-reset-page">
            <h1
              className="custom-font"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              {t("link_expire")}{" "}
            </h1>

            <p className="custom-font" style={{ textAlign: "center" }}>
              <p>{t("new_link_1")}</p>
              <p>{t("new_link_2")}</p>
              <p>{t("new_link_3")}</p>
              <p>{t("thank_you")}</p>
            </p>
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("Enter_your_email")}
              className="line-field"
              required
            />

            <div className="button-container">
              <input
                type="submit"
                value={t("send_activation_link")}
                class="button"
              />
            </div>
          </form>
        </header>
        <SocialIcons />
      </div>
      <div className="footer-sticky">{isMobile ? <Footer2 /> : <Footer />}</div>
    </div>
  );
};

export default ExpirePage;
