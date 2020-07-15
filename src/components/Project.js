import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare, FaHome } from "react-icons/fa"
const Project = ({description,title,github,stack,url,image,index}) => {
  return (

    <article className="project">
      <Image fluid={image.childImageSharp.fluid}
      className="project-img"/>
     
     <div className="project-info">
       <span className="project-number">{index+1}</span>
    
     <h3>{title}</h3>
     <p className="project-desc">
       {description}
     </p>
     <div className='project-stack'>
       {stack.map((item)=>{
         return(
         <span key ={item.id}>{item.title}</span>
         )
       })}
     </div>
     <div className="projects-links">
       <a href={github}>
         <FaGithubSquare className="project-icon"/>
       </a>
       <a href={url}>
         <FaHome className="project-icon"/>
       </a>
     </div>
     </div>
  

    </article>
  )
}

Project.propTypes = {
  title:PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  
}

export default Project
