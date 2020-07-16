import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaQuora,
  FaTwitterSquare,
  FaGithubSquare
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/abhinav.baiju.5/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/abhinav-t-b-226172190/",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/abhinav-TB",
  },
  {
    id: 4,
    icon: <FaQuora className="social-icon"></FaQuora >,
    url: "https://www.quora.com/profile/Abhinav-TB",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/abhiGamez",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
