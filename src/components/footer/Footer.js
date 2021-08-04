import React from "react"
import "./footer.css"

function Footer(){

return(
  <div>

  <div className="footerSM">
  <a href="https://www.linkedin.com/in/max-rosales-923565120/"
    target="_blank">
  <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" 
  alt="My LinkedIn" height="34" width="34" 
  className="footerSMIcons"/>
  </a>
  <a href="https://www.instagram.com/maxroswerk/"
    target="_blank">
  <img src="https://facebookbrand.com/wp-content/uploads/2021/03/Instagram_AppIcon_Aug2017.png?w=150&h=150" 
  alt="My LinkedIn" height="34" width="34" 
  className="footerSMIcons"/>
  </a>
  </div>

  <div className="footer">Roswerk 2021</div>

  </div>
)

}

export default Footer;