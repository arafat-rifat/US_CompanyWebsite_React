import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import ServiceCart from "../CommonLayout/ServiceCart";
import cart1 from "../../assets/Cart1.png";
import cart2 from "../../assets/Cart2.png";
import cart3 from "../../assets/Cart3.png";
import cart4 from "../../assets/Cart4.png";
import cart5 from "../../assets/Cart5.png";

const ServiceCartSection = () => (
  <RevealOnScroll>
    <section className="bg-[#00040D]">
      <Container>
        {/* Main Div */}
        <div className="grid grid-cols-1 laptop:grid-cols-3 gap-4  pb-[70px] laptop:pb-[101px] px-[20px] desktop:px-0">
          <ServiceCart
            title="Custom Software Development"
            src={cart1}
            className="rounded-[40px] px-[27px] py-[43px] bg-[#7FF3CA] grid grid-cols-1 gap-[95px]"
          />
          <ServiceCart
            title="Web Development"
            src={cart2}
            className="rounded-[40px] px-[27px] py-[43px] bg-[#F7F878] grid grid-cols-1 gap-[95px]"
          />
          <ServiceCart
            title="UI/UX Design"
            src={cart3}
            className="rounded-[40px] px-[27px] py-[43px] bg-[#7DC5FA] grid grid-cols-1 gap-[95px]"
          />
          <ServiceCart
            title="Brand Identity"
            src={cart4}
            className="rounded-[40px] px-[27px] py-[43px] bg-[#FFFFFF] grid grid-cols-1 gap-[95px]"
          />
          <ServiceCart
            title="Search Engine Optimization"
            src={cart5}
            className="rounded-[40px] px-[27px] py-[43px] bg-[#FFFFFF] grid grid-cols-1 gap-[95px] col-span-1 laptop:col-span-2"
          />
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default ServiceCartSection;
