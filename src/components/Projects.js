import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({projects,title,showlink}) => {
  return (
    <section className="section projects">
      <Title title={title}/>  
      <div classname="section-center projects-center">
       {projects.map((project,index)=>{
         return(
           <Project key={project.id} index={index} {...project}/>

         )
       })}
      </div>
      {showlink && <Link to="/projects" className="btn center-btn">
       All projects
        </Link>}
    </section>
  )
}

export default Projects
