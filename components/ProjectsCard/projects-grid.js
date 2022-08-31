import ProjectCard from "./project-card";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="flex flex-col space-y-12">
      {projects
        .sort((a, b) => a.index - b.index)
        .map((project) => {
          return (
            <ProjectCard
              thumbnail={project.thumbnail}
              id={project.id}
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              website={project.website}
              github={project.github}
              thumbnailAlt={project.thumbnailAlt}
            />
          );
        })}
    </div>
  );
};

export default ProjectGrid;
