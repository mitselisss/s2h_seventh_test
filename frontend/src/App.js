import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import HomePage from "./pages/homePage";
import UserProfilePage from "./pages/userProfilePage";
import ForgotPasswordPage from "./pages/resetpassword/forgotPasswordPage";
import ResetPasswordPage from "./pages/resetpassword/resetPasswordPage";
import ResetPasswordMessage from "./pages/resetpassword/resetPasswordMessage";
import RegisterUserProfilePage from "./pages/RegisterUserProfilePage";
import AboutPage from "./pages/aboutPage";
import Stats from "./pages/statistics";
import Fruits from "./pages/charts/fruits";
import Energy from "./pages/charts/energy";
import Micronutrients from "./pages/charts/micronutrients";
import Weight from "./pages/charts/weight";
import ActivationPage from "./pages/activation/activationPage";
import ActivationMessage from "./pages/activation/activationMessage";
import ExpirePage from "./pages/activation/expirePage";
import ExpirePassworPage from "./pages/resetpassword/expirePasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route exact path="/home" element={<HomePage />} />
        <Route path="/rUserProfile" element={<RegisterUserProfilePage />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/charts/fruits" element={<Fruits />} />
        <Route path="/charts/energy" element={<Energy />} />
        <Route path="/charts/micronutrients" element={<Micronutrients />} />
        <Route path="/charts/weight" element={<Weight />} />

        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/resetpassword/:token" element={<ResetPasswordPage />} />
        <Route
          path="/resetpasswordmessage"
          element={<ResetPasswordMessage />}
        />

        <Route
          path="/activationMessage/:token"
          element={<ActivationMessage />}
        />
        <Route path="/activationPage" element={<ActivationPage />} />
        <Route path="/expirePage" element={<ExpirePage />} />
        <Route path="/expirePasswordPage" element={<ExpirePassworPage />} />
      </Routes>
    </Router>
  );
}

export default App;
