import { Outlet } from "react-router-dom";
import HeaderCaseStudy from "../UI/HeaderCaseStudy";
import ContactUsSection from "../UI/ContactUsSection";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";
import Footer from "../CommonLayout/Footer";

const CaseStudyLayout = ({ title1, title2 }) => (
  <>
    <HeaderCaseStudy />
    <Outlet />
    <ContactUsSection />
    <WelcomeBluetalecast title1={title1} title2={title2} />
    <Footer />
  </>
);

export default CaseStudyLayout;
