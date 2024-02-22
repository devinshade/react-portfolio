import React from 'react'
import "./Projects.css"
import projectData from './data'
import fetchApi from './utils'
import Button from '../../components/Button'
import ProjectCard from '../../components/ProjectCard'
const Projects = () => {
const handlePress = () => console.log("I'm pressed")

  return (<section>
    <div>Projects</div>
    <Button text={"Press Me"} action={handlePress}/>
    <Button text= {"Touch This Button!"} action= {fetchApi}/>
    {projectData.map(poop => <ProjectCard project={poop}/>)} 
  </section>
  )
}

export default Projects