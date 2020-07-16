import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links" />
      <h4>copyrightS&copy;{new Date().getFullYear()}
      <span> AbhiGamez </span> all rights reserved
      </h4>
    </div>
  </footer>
}

export default Footer
