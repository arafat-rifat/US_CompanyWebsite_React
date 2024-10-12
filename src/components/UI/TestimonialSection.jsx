import Container from "../CommonLayout/Container";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import TestimonialCart from "../CommonLayout/TestimonialCart";
import DavidToles from "../../assets/TestimonialPicture/David_Toles.jpeg";
import Cristoper from "../../assets/TestimonialPicture/Cristopher.jpeg";
import Perrellii from "../../assets/TestimonialPicture/Perrelli.jpeg";
import stella from "../../assets/TestimonialPicture/Stella.jpeg";
import jaek from "../../assets/TestimonialPicture/Jaec.jpeg";
import johnBlanch from "../../assets/TestimonialPic.png";

const TestimonialSection = () => (
  <RevealOnScroll>
    <section className="bg-[#00040D]">
      <Container>
        {/* Main Div */}
        <div className="pt-[25px] pb-[25px] laptop:pt-[100px] laptop:pb-[100px]">
          {/* heading */}
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <p className="text-[#666666] font-light text-[16px] laptop:text-[24px]">
              /Testimonials
            </p>
            <h3 className="text-[#FFFFFF] text-[32px] laptop:text-[80px] font-thin hover:text-gray-700 duration-300">
              What our clients say
            </h3>
            <p className="text-[#FFFFFF] text-[16px] laptop:text-[24px] font-thin hover:text-gray-600 duration-300">
              Our Clients Can’t Say Enough About Us.
            </p>
          </div>
          {/* Testimonial Cart */}
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-[16px] pt-11 px-[20px] desktop:px-0">
            <TestimonialCart
              src={DavidToles}
              title="David Toles"
              designation="Executive Vice President"
              details="Bluetelecast is a fantastic contractor! Their team delivers top-notch work with a high level of professionalism. Whenever I had questions, they were always there, and they consistently met the deadlines they set. Their English skills are excellent, and collaborating with them is effortless. They're not just skilled but also genuinely nice people. I've already hired Bluetelecast again for another project and look forward to working with them more in the future."
            />
            <TestimonialCart
              src={Cristoper}
              title="Christopher Skomro"
              designation="IS- Technology & Planning Lead"
              details="Even though I don't believe in make-believe creatures like unicorns, I want to express how impressed I am with Bluetelecast and their team. During our project meeting today, I commended Faheem, who leads the tech team, stating that in my more than 25 years of working with technology, I've never encountered better customer service. Bluetelecast and their team are not only proficient in technical matters but also exceptionally helpful and deliver outstanding results overall."
            />
            <TestimonialCart
              src={Perrellii}
              title="Derek Perrelli"
              designation="VP IT managing Director"
              details="I've been collaborating with Bluetelecast and their team for nearly three years on a significant project. Working with them has been a great experience—they're professional and accommodating. Despite numerous changes in project requirements, Bluetelecast and their team have consistently adapted. Bluetelecast provides clear cost breakdowns, and I highly recommend them to anyone seeking a reliable development team."
            />
            <TestimonialCart
              src={stella}
              title="Stella Leonard"
              designation="CEO AIB Bank"
              details="Working with Bluetelecast and their team has been absolutely fantastic. We've found them to be highly professional and knowledgeable in the web/app field. They go the extra mile to ensure that we meet all deadlines for Salaam Telecommunication and receive products according to our specifications. If you're in search of a reliable development team for your projects, I strongly recommend considering Bluetelecast and their team."
            />
            <TestimonialCart
              src={jaek}
              title="Jace Mxkenzie "
              designation="Lead Manager - Chief Capital (O & C ) LLC"
              details="It's been a pleasure working with Bluetelecast and their team. As a startup from the US, we appreciated their assistance in suggesting the appropriate technology to kickstart and expand our vision. They understood our overarching goals, which facilitated the planning and development of our innovative app."
            />
            <TestimonialCart
              src={johnBlanch}
              title="Dr.John Blanch"
              designation="Senior VIP managing Director at Royal Medical Complex"
              details="Once again, Bluetelecast and their team have done an excellent job completing my apps and website. Although there are a few more updates I require, I'm closing the job and paying Bluetelecast in full because I trust they will take care of the remaining tasks we couldn't finish earlier. I thoroughly enjoy working with them - they're outstanding!"
            />
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default TestimonialSection;
