import React from 'react'

const ProjectCard = (props) => {
    console.log("Something: ", props);
  return (
    <div>{props.project.title}</div>
  )
}

export default ProjectCard