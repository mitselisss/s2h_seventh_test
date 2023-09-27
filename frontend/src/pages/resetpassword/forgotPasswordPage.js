import React from "react";
import logo from "../../images/logo/logo2.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";
import Footer from "../../components/footer.js";
import Footer2 from "../../components/footer2.js";
import SocialIcons from "../../components/socialIcons.js";
import { useTranslation } from "react-i18next";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`resetPasswordEmail/${email}`);
      if (response.status === 200) {
        navigate("/resetPasswordMessage");
      }
    } catch (error) {
      if (
        error.response.data.error ===
        "No active account matches this email address"
      ) {
        setErrorMessage(t("forgot_pass_error_1"));
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
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <img src={logo} className="Forgot-logo" alt="logo" />
        <div className="password-reset-page">
          <h1 className="custom-font">{t("Oh_no,_I_forgot!")}</h1>
          <p className="custom-font">
            {t(
              "Enter_your_email_and_we’ll_send_you_a_link_to_set_a_new_password"
            )}{" "}
          </p>
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
              <input type="submit" value={t("Reset_password")} class="button" />
            </div>

            <h2 className="custom-font">{t("Don't_have_an_account?")}</h2>
          </form>
        </div>

        <Link to="/register" className="button-container">
          {t("Sign_Up")}
        </Link>
      </header>
      <SocialIcons />

      <div className="footer-fixed">{isMobile ? <Footer2 /> : <Footer />}</div>
    </div>
  );
}

export default ForgotPasswordPage;
