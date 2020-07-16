import React from "react"
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img style={{height:"50px",paddingRight:"50px"}} src={logo} alt="logo"/>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
