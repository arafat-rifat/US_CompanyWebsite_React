import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '../CommonLayout/ProjectCard';
import projectImage1 from '../../assets/projects/Project1.png';
import projectImage2 from '../../assets/projects/Project2.png';
import projectImage3 from '../../assets/projects/Project3.png';
import projectImage4 from '../../assets/projects/Project4.png';

const ProjectsContainer = () => {
  const projects = [
    {
      title: 'Univest - Investment Website Landing page design',
      imageSrc: projectImage1,
    },
    {
      title: 'Univest - Investment Website Landing page design',
      imageSrc: projectImage2,
    },
    {
      title: 'Univest - Investment Website Landing page design',
      imageSrc: projectImage3,
    },
    {
      title: 'Univest - Investment Website Landing page design',
      imageSrc: projectImage4,
    },

  ];

  return (
    <div className="container mx-auto px-4">
      {projects.map((project) => (
        <ProjectCard
          key={uuidv4()}
          title={project.title}
          imageSrc={project.imageSrc}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
