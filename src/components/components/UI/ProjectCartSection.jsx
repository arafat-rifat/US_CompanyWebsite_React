import Container from "../CommonLayout/Container";
import ProjectCard from "../CommonLayout/ProjectCard";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import project1V2 from "../../assets/projects/project1V2.png";
import project2V2 from "../../assets/projects/project2V2.png";
import project3V2 from "../../assets/projects/project3V2.png";
import project4V2 from "../../assets/projects/project4V2.png";
import project5V2 from "../../assets/projects/project5V2.png";

const ProjectCartSection = () => {
  const projects = [
    {
      id: 1,
      title: "Enmarco - Tech stack Website Landing page design",
      imageSrc: project1V2,
    },
    {
      id: 2,
      title: "Flyaway Hub - Tech stack Website Landing page design",
      imageSrc: project2V2,
    },
    {
      id: 3,
      title: "GDPR Register  - Website Landing page design",
      imageSrc: project3V2,
    },
    {
      id: 4,
      title: "POS - Tech stack Website Landing page design",
      imageSrc: project4V2,
    },
    {
      id: 5,
      title: "Smsapp - Website Landing page design",
      imageSrc: project5V2,
    },
  ];

  return (
    <RevealOnScroll>
      <section className="bg-[#E8F0F9]">
        <Container>
          <div className="py-[40px] laptop:py-[100px] flex flex-col gap-[53px] px-[20px] desktop:px-0">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </Container>
      </section>
    </RevealOnScroll>
  );
};

export default ProjectCartSection;
