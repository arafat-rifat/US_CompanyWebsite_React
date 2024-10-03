import HeaderPrivacyAndPolicy from "../UI/HeaderPrivacyAndPolicy";
import { Outlet } from "react-router-dom";
import ContactUsSection from "../UI/ContactUsSection";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";
import Footer from "../CommonLayout/Footer";

const PrivacyAndPolicyLayout = ({ title1, title2 }) => {
  return (
    <>
      <HeaderPrivacyAndPolicy />
      <Outlet />
      <ContactUsSection />
      <WelcomeBluetalecast title1={title1} title2={title2} />
      <Footer />
    </>
  );
};

export default PrivacyAndPolicyLayout;
