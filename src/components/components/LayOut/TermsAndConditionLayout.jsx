import { Outlet } from "react-router-dom";
import HeaderTermsAndCondition from "../UI/HeaderTermsAndCondition";
import Footer from "../CommonLayout/Footer";
import ContactUsSection from "../UI/ContactUsSection";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";

const TermsAndConditionLayout = ({ title1, title2 }) => (
  <>
    <HeaderTermsAndCondition />
    <Outlet />
    <ContactUsSection />
    <WelcomeBluetalecast title1={title1} title2={title2} />
    <Footer />
  </>
);

export default TermsAndConditionLayout;
