import { Outlet } from "react-router-dom";
import HeaderForCareer from "../UI/HeaderForCareer";
import Footer from "../CommonLayout/Footer";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";
import ContactUsSection from "../UI/ContactUsSection";

const CareerLayout = ({ title1, title2 }) => (
  <>
    <HeaderForCareer />
    <Outlet />

    <ContactUsSection />
    <WelcomeBluetalecast
      title1={title1}
      title2={title2}
      className="hover:text-[#87CEEB] duration-300 shadow-rose-200"
    />
    <Footer />
  </>
);

export default CareerLayout;
