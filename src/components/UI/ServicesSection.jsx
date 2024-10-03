import { Link } from "react-router-dom";
import Container from "../CommonLayout/Container";
import ServicesCart from "../CommonLayout/ServicesCart";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import ArrowRightWhite from "../../assets/Arrow - Right white.png";

// Services Picture
import WebDevelopment from "../../assets/Services/WebDevelopment.jpg";
import SoftwareDevelopment from "../../assets/Services/SoftwareDevelopment.jpg";
import AppDevelopment from "../../assets/Services/AppDevelopment.jpg";
import DataBaseDesign from "../../assets/Services/DataBaseDesign.jpg";
import CustomApp from "../../assets/Services/CustomApp.jpg";
import GrapichDesign from "../../assets/Services/GrapichDesign.jpg";

const ServicesSection = () => (
  <RevealOnScroll>
    <section className="bg-[#E8F0F9]">
      <Container>
        {/* Main div */}
        <div className="flex flex-col laptop:flex-row pt-[58px] pb-[100px] gap-10 laptop:gap-0 px-8 desktop:px-0">
          {/* left  */}
          <div className="order-2 laptop:order-1">
            <div className="flex flex-col gap-[22px] laptop:gap-[45px] order-2 laptop:order-1">
              {/* Information */}
              <div>
                <h5 className="text-[#191C23] text-[35px] laptop:text-[48px] max-w-[437px]">
                  {" "}
                  Specific expertise Integrated experience.{" "}
                </h5>
              </div>

              {/* Button */}
              <Link to="/contact">
                <div className="flex pb-[50px]">
                  <button className="rounded-[34px] px-[32px] py-[15px] border border-[#191C23] text-[24px]">
                    Start a project
                  </button>
                  <div className="bg-[#191C23] rounded-[30px] px-[27px] py-[13px]">
                    <img src={ArrowRightWhite} alt="Arrow pointing right" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-[70px] order-1 laptop:order-2">
            <ServicesCart
              src={WebDevelopment}
              title="Web Designing and Development"
              description="Discover the art and science of online presence with
                        Bluetelecast's web design and development services.
                        We craft unique websites that seamlessly blend style
                        and function. Let our portfolio speak for itself as we
                        showcase our ability to elevate businesses through
                        compelling digital experiences"
            />
            <ServicesCart
              src={SoftwareDevelopment}
              title="Software Development"
              description="Empower your business with our custom software
solutions. We specialize in optimizing your operations
with intuitive and efficient software design. Explore
how we've enhanced workflows for clients in our
case studies, demonstrating the tangible benefits of
our tailored software solutions."
            />
            <ServicesCart
              src={AppDevelopment}
              title="Mobile Apps"
              description="Extend your brand's reach with our cutting-edge
mobile app development. Our mobile apps
seamlessly blend creativity with functionality.
Witness the power of your brand in handheld
devices, as we redefine your presence in the
mobile world."
            />
            <ServicesCart
              src={DataBaseDesign}
              title="Database Designing"
              description="Recognizing the value of your data, we ensure
efficient and secure database design. Our expertise
lies in creating databases that scale with your
business while maintaining the highest level of
security. Trust us to safeguard the integrity of your
valuable information."
            />
            <ServicesCart
              src={CustomApp}
              title="Custom Apps development"
              description="Go beyond the ordinary with Bluetelecast’s unique
app solutions. We innovate to create apps that stand
out, revolutionizing user engagement and meet
specific needs of clients. Experience the possibilities
as we redefine what's achievable for your brand with
our diverse application development
"
            />
            <ServicesCart
              src={GrapichDesign}
              title="Graphic Design"
              description="Explore the world of graphic design with Bluetelecast.
Our designs don't just look good; they're made to
connect with your audience. Trust us to give your
brand a lively and engaging look through our graphic
design skills.
"
            />
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default ServicesSection;
