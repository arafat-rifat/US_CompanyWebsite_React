import { Outlet } from "react-router-dom";
import HeaderAbout from "../UI/HeaderAbout";
import Footer from "../CommonLayout/Footer";
import ContactUsSection from "../UI/ContactUsSection";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";

const AboutLayout = ({ title1, title2 }) => (
  <>
    <HeaderAbout />

    <Outlet />

    <ContactUsSection />
    <WelcomeBluetalecast title1={title1} title2={title2} />
    <Footer />
  </>
);

export default AboutLayout;
