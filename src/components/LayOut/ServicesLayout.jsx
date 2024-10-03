import { Outlet } from "react-router-dom";
import HeaderService from "../UI/HeaderService";
import TestimonialSection from "../UI/TestimonialSection";
import FaqSection from "../UI/FaqSection";
import ContactUsSection from "../UI/ContactUsSection";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";
import Footer from "../CommonLayout/Footer";

const ServicesLayout = ({ title1, title2 }) => (
  <>
    <HeaderService />
    <Outlet />
    <TestimonialSection />
    <FaqSection />
    <ContactUsSection />
    <WelcomeBluetalecast title1={title1} title2={title2} />
    <Footer />
  </>
);

export default ServicesLayout;
