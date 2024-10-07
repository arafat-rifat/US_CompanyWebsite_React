import { Outlet } from "react-router-dom";
import Footer from "../CommonLayout/Footer";

import Header from "../UI/Header";
import ContactUsSection from "../UI/ContactUsSection";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";

const RootLayout = ({ title1, title2 }) => (
  <>
    <Header />
    <Outlet />
    <ContactUsSection />
    <WelcomeBluetalecast title1={title1} title2={title2} />
    <Footer />
  </>
);

export default RootLayout;
