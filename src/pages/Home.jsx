import AboutUs from "../components/UI/AboutUs";
import BluetalecastNumber from "../components/UI/BluetalecastNumber";
import FaqSection from "../components/UI/FaqSection";
import Ourservices from "../components/UI/Ourservices";
import SalesForceCRM from "../components/UI/SalesForceCRM";
import ServiceCartSection from "../components/UI/ServiceCartSection";
import SupportSection from "../components/UI/SupportSection";
import TestimonialSection from "../components/UI/TestimonialSection";

const Home = () => (
  <>
    <SalesForceCRM />
    <AboutUs />
    <SupportSection />
    <BluetalecastNumber />
    <Ourservices />
    <ServiceCartSection />
    <TestimonialSection />
    <FaqSection />
  </>
);

export default Home;
