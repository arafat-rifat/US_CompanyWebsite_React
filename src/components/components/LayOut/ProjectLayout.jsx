import { Outlet } from "react-router-dom";
import HeaderProject from "../UI/HeaderProject";
import Footer from "../CommonLayout/Footer";
import ContactUsSection from "../UI/ContactUsSection";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";

const ProjectLayout = ({ title1, title2 }) => (
  <>
    <HeaderProject />

    <Outlet />

    <ContactUsSection />
    <WelcomeBluetalecast title1={title1} title2={title2} />

    <Footer />
  </>
);

export default ProjectLayout;
