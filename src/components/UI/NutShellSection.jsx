/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import Container from "../CommonLayout/Container";
import DisplayCaseStudy from "../CommonLayout/DisplayCaseStudy";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import EnmarcoPic from "../../assets/projects/Enmarco.png";
import Enmarco1 from "../../assets/projects/nutshelPic1.png";
import Enmarco2 from "../../assets/projects/nutshellPic2.png";
import Enmarco3 from "../../assets/projects/nutshellPic3.png";
import Enmarco4 from "../../assets/projects/EnmarcoCheckout.png";
// Flyhub
import FlyHub1 from "../../assets/projects/FlyHub1.png";
import FlyHub2 from "../../assets/projects/FlyHub2.png";
import FlyHub3 from "../../assets/projects/FlyHub3.png";
import FlyHub4 from "../../assets/projects/FlyHub4.png";
import FlyHub5 from "../../assets/projects/FlyHub5.png";

// GDPR
import GDPR1 from "../../assets/projects/Gdpr1.png";
import GDPR2 from "../../assets/projects/Gdpr2.png";
import GDPR3 from "../../assets/projects/Gdpr3.png";
import GDPR4 from "../../assets/projects/Gdpr4.png";
import GDPR5 from "../../assets/projects/Gdpr5.png";
// Pos
import Pos1 from "../../assets/projects/Pos1.png";
import Pos2 from "../../assets/projects/Pos2.png";
import Pos3 from "../../assets/projects/Pos3.png";
import Pos4 from "../../assets/projects/Pos4.png";
import Pos5 from "../../assets/projects/Pos5.png";
// SmsApp1
import SmsApp1 from "../../assets/projects/SmsApp1.png";
import SmsApp2 from "../../assets/projects/SmsApp2.png";
import SmsApp3 from "../../assets/projects/SmsApp3.png";
import SmsApp4 from "../../assets/projects/SmsApp4.png";
import SmsApp5 from "../../assets/projects/SmsApp5.png";

const projectDetails = [
  {
    id: 1,
    srcOne: EnmarcoPic,
    srcTwo: Enmarco1,
    srcThree: Enmarco2,
    srcFour: Enmarco3,
    srcFive: Enmarco4,
    title2:
      "On the frontend, we utilized React.js, JavaScript, jQuery, HTML5, and CSS3 to deliver a dynamic, responsive user experience.",
    title3:
      "This tech stack ensures both functionality and a modern, intuitive interface for users.",
  },
  {
    id: 2,
    srcOne: FlyHub1,
    srcTwo: FlyHub2,
    srcThree: FlyHub3,
    srcFour: FlyHub4,
    srcFive: FlyHub5,
    title2:
      "The frontend was crafted using AngularJS, JavaScript, jQuery, HTML5, and CSS3, ensuring a responsive, user-friendly interface with dynamic features.",
    title3:
      "This comprehensive tech stack provides a scalable solution tailored to meet the needs of FlyAwayHub’s users.",
  },
  {
    id: 3,
    srcOne: GDPR1,
    srcTwo: GDPR2,
    srcThree: GDPR3,
    srcFour: GDPR4,
    srcFive: GDPR5,
    title2:
      "The frontend was built with avaScript, jQuery, HTML5, and CSS3, delivering a responsive and intuitive user interface that enhances usability and compliance functionality.",
    title3:
      "This technology stack ensures GDPR Register provides a robust, user-friendly solution for managing GDPR compliance.",
  },
  {
    id: 4,
    srcOne: Pos1,
    srcTwo: Pos2,
    srcThree: Pos3,
    srcFour: Pos4,
    srcFive: Pos5,
    title2:
      "On the frontend, we utilized React.js, JavaScript, jQuery, Ant Design (Antd), and React Bootstrap to deliver a highly responsive and intuitive user interface, supported by HTML5 and  CSS3 for modern, sleek design.",
    title3:
      "This tech stack provided a robust and scalable solution, optimized for efficient POS operations.",
  },
  {
    id: 5,
    srcOne: SmsApp1,
    srcTwo: SmsApp2,
    srcThree: SmsApp3,
    srcFour: SmsApp4,
    srcFive: SmsApp5,
    title2:
      "The frontend was developed using JavaScript, jQuery, HTML5, and CSS3, ensuring a responsive, user-friendly interface with seamless messaging functionality.",
    title3:
      "This tech stack delivers a robust and efficient solution tailored to meet the SMS App’s operational requirements.",
  },
];

const NutShellSection = () => {
  const { projectId } = useParams();
  const project = projectDetails.find((p) => p.id === parseInt(projectId, 10));

  return (
    <section className="bg-[#020308]">
      <Container>
        <div className="pb-[100px] laptop:pb-[200px] px-[20px] desktop:px-0">
          <DisplayCaseStudy project={project} />

          {/* What we did in a nutshell */}
          <div className="pt-[50px] laptop:pt-[50px] pb-[70px] max-w-[859px] flex flex-col gap-[28px]">
            <p className="text-[#8F969D] text-base laptop:text-[32px] leading-[46px]">
              {project.title2}
            </p>
          </div>

          {/* Nutshell Picture */}

          <RevealOnScroll>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[13px]">
              <div className="  col-span-1 laptop:col-span-2">
                <img src={project.srcTwo} className="w-full" alt="pic" />
              </div>
              <RevealOnScroll>
                <div>
                  <img src={project.srcThree} alt="pic" className="w-full" />
                </div>
              </RevealOnScroll>
              <div>
                <img src={project.srcFour} alt="pic" className="w-full" />
              </div>
            </div>
          </RevealOnScroll>

          {/* Description */}
          <p className="text-[#8F969D]  text-base laptop:text-[32px] leading-[46px] max-w-[859px] py-[66px]">
            {project.title3}
          </p>

          {/* Enmarco Checkout Picture */}
          <RevealOnScroll>
            <div>
              <img src={project.srcFive} alt="pic" className="w-full" />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
};

export default NutShellSection;
