
import React from "react";
import ProjectItem from "./ProjectItem";


  function ProjectList({ projects }) {
  console.log(projects);
  const project = projects.forEach((project) =>{
    return {project}

  })
  
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      
      <ProjectItem technologies = {project.technologies} />
      <ProjectItem name = {project.name} />
      <ProjectItem about ={project.about} />
    
      </div >
  
    
    </div>
  );
}

export default ProjectList;
