import Container from "../CommonLayout/Container";
import Button from "../CommonLayout/Button";
import FaqCart from "../CommonLayout/FaqCart";
import { Link } from "react-router-dom";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import ArrowRight from "../../assets/Arrow - Right 3.png";

const FaqSection = () => (
  <RevealOnScroll>
    <section className="bg-[#00040D]">
      <Container>
        {/* Main Div */}
        <div className="pt-[25px] pb-[25px] laptop:pt-[100px] laptop:pb-[100px]">
          {/* Heading Section */}
          <RevealOnScroll>
            <div className="flex flex-col laptop:flex-row justify-between px-[20px] desktop:px-0">
              {/* heading */}
              <div className="flex flex-col justify-center items-center laptop:justify-start laptop:items-start gap-[20px]">
                <p className="text-[#666666] font-light text-[18px] laptop:text-[24px]">
                  /FAQ
                </p>
                <h3 className="text-[#FFFFFF] text-[32px] laptop:text-[80px] font-thin">
                  Got any questions? <br />
                  <span className="text-[#96989E]">
                    We&apos;ve got answers.
                  </span>
                </h3>
              </div>
              {/* button */}
              <div className="flex flex-col-reverse px-[56px] desktop:px-0 pt-[30px] laptop:pt-0">
                <a
                  href="https://calendly.com/fmomand-bluetelecast/30min?back=1&month=2024-10"
                  target="_blank"
                >
                  <Button className="flex gap-[12px] rounded-[30px] py-[14px] px-[25px] text-[24px] font-light bg-[#FFFFFF]">
                    Book an intro call
                    <span>
                      <img src={ArrowRight} alt="right arrow" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Faq Section */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4 pt-16 px-[20px] desktop:px-0">
              <FaqCart
                title="What services does Bluetelecast offer?"
                ans="Bluetelecast offers a range of services including software development, mobile application development, website development, and logo design."
              />
              <FaqCart
                title="How experienced is Bluetelecast's team?"
                ans="Our team at Bluetelecast consists of highly skilled professionals with years of experience in their respective fields. We ensure that our team members are experts in the latest technologies and methodologies."
              />
              <FaqCart
                title="Can Bluetelecast customize solutions according to our specific needs?"
                ans="Yes, at Bluetelecast, we understand that every project is unique. We are committed to providing customized solutions tailored to your specific requirements."
              />
              <FaqCart
                title="What industries has Bluetelecast worked with in the past?"
                ans="Bluetelecast has experience working with various industries including but not limited to healthcare, finance, e-commerce, education, and entertainment."
              />
              <FaqCart
                title="How does Bluetelecast ensure the security of our data and intellectual property?"
                ans="Bluetelecast takes data security and confidentiality very seriously. We have strict protocols in place to safeguard your data and intellectual property throughout the development process."
              />
              <FaqCart
                title="What is Bluetelecast's development process like?"
                ans="Our development process at Bluetelecast is collaborative and transparent. We involve our clients at every stage of the project to ensure that their requirements are met and expectations are exceeded."
              />
              <FaqCart
                title="How long does it typically take Bluetelecast to complete a project?"
                ans="The duration of a project depends on its complexity and scope. Bluetelecast provides estimated timelines during the initial consultation phase and keeps our clients updated on the progress throughout the development process."
              />
              <FaqCart
                title="What after-sales support does Bluetelecast offer?"
                ans="Bluetelecast offers comprehensive after-sales support including maintenance, updates, and troubleshooting to ensure that your solution continues to perform optimally."
              />
              <FaqCart
                title="Can Bluetelecast provide references or examples of previous work?"
                ans="Yes, Bluetelecast can provide references and case studies of previous work upon request. You can also visit our portfolio section on our website to see examples of our work."
              />
              <FaqCart
                title="How do we get started with our project with Bluetelecast?"
                ans="Simply reach out to Bluetelecast via phone, email, or through the contact form on our website. We'll schedule an initial consultation to discuss your project requirements and provide you with a detailed proposal."
              />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default FaqSection;
