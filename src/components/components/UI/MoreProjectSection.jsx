import Container from "../CommonLayout/Container";
import MoreProjectCart from "../CommonLayout/MoreProjectCart";
import RevealOnScroll from "../CommonLayout/RevealOnScroll";
import project1V2 from "../../assets/projects/project1V2.png";
import project2V2 from "../../assets/projects/project2V2.png";
import project3V2 from "../../assets/projects/project3V2.png";
import project5V2 from "../../assets/projects/project5V2.png";

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
    id: 5,
    title: "Smsapp - Website Landing page design",
    imageSrc: project5V2,
  },
];

const MoreProjectSection = () => (
  <RevealOnScroll>
    <section className="bg-[#FFFFFF]">
      <Container>
        {/* Main div */}
        <div className="px-[20px] desktop:px-0">
          {/* Heading */}
          <div className="flex justify-between items-center pt-[100px] pb-[60px]">
            <h1 className="text-[#191C23]  text-[32px] laptop:text-[112px]  leading-9 laptop:leading-[122px]">
              <span className="text-[#8F969D]">More</span>
              <br /> Projects
            </h1>
            <p className="text-[#191C23] text-base laptop:text-2xl leading-8 max-w-[471px]">
              Explore all our projects by clicking the buttons below. Each
              project highlights our dedication and innovation, offering
              something for everyone. Dive in and discover the exciting work
              we’re doing!
            </p>
          </div>

          {/* More Project Cart */}

          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <MoreProjectCart key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  </RevealOnScroll>
);

export default MoreProjectSection;
