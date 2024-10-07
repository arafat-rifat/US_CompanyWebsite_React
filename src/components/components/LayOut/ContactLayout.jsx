import { Outlet } from "react-router-dom";
import HeaderContact from "../UI/HeaderContact";
import WelcomeBluetalecast from "../UI/WelcomeBluetalecast";
import Footer from "../CommonLayout/Footer";

const ContactLayout = ({ title1, title2 }) => (
  <>
    <HeaderContact />

    <Outlet />

    <WelcomeBluetalecast title1={title1} title2={title2} />

    <Footer />
  </>
);

export default ContactLayout;
