import { useParams } from "react-router-dom";
import Navbar from "../CommonLayout/Navbar";
import Hero from "../CommonLayout/Hero";
import Container from "../CommonLayout/Container";

const projects = [
  {
    id: 1,
    title: "Enmarco Project Overview",
    subtitle:
      "For Enmarco, we developed a scalable and high-performance platform. The backend was built using PHP with Yii2 and Laravel, and MySQL for efficient data handling. We also implemented RESTful APIs for seamless communication.",
  },
  {
    id: 2,
    title: "FlyAwayHub Project Overview",
    subtitle:
      "For FlyAwayHub, we developed a robust platform utilizing PHP with the Yii2 framework and a MySQL database for efficient backend performance. We integrated RESTful APIs to enable smooth data exchange across systems.",
  },

  {
    id: 3,
    title: "GDPR Register Project Overview",
    subtitle:
      "For GDPR Register, we developed a secure and scalable platform using PHP with the Laravel framework and a MySQL database to manage data efficiently. RESTful APIs were implemented to ensure seamless integration between services.",
  },
  {
    id: 4,
    title: "Point of Sale (POS) System Project Overview",
    subtitle:
      "We developed a comprehensive Point of Sale (POS) system using PHP with the Laravel framework for secure backend management and a MySQL database for efficient data handling. RESTful APIs facilitated seamless communication across the platform.",
  },
  {
    id: 5,
    title: "SMS App Project Overview",
    subtitle:
      "For SMS App, we built a secure and scalable platform utilizing PHP with the Laravel framework and MySQL for efficient backend operations. RESTful APIs were employed to enable smooth and reliable communication between services.",
  },
];

const HeaderCaseStudy = () => {
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === parseInt(projectId, 10));

  return (
    <>
      <div className="bg-hero-bg bg-cover bg-center">
        <Navbar />
        <Hero>
          <Container>
            {/* Left Information */}
            <div className="flex flex-col gap-[25px] pt-[75px] laptop:pt-[170px] pb-[20px] px-[20px] desktop:px-0">
              <h1 className="text-[#FFFFFF] font-thin leading-[60px] laptop:leading-[122px] text-[32px]  laptop:text-[112px]">
                {project.title}
              </h1>
              <p className="text-[#FFFFFF] font-thin text-[24px] laptop:text-[32px] leading-[46px] max-w-[926px]">
                {project.subtitle}
              </p>
            </div>
          </Container>
        </Hero>
      </div>
    </>
  );
};
export default HeaderCaseStudy;
