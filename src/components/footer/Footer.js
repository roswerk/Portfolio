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
  alt="My Instagram" height="34" width="34" 
  className="footerSMIcons"/>
  </a>
  <a href="https://twitter.com/MaximilianRosa2"
    target="_blank">
  <img src="https://upload.wikimedia.org/wikipedia/de/thumb/9/9f/Twitter_bird_logo_2012.svg/300px-Twitter_bird_logo_2012.svg.png" 
  alt="My Twitter" height="34" width="40" 
  className="footerSMIcons"/>
  </a>
  </div>

  <div className="footer">Roswerk 2021</div>

  </div>
)

}

export default Footer;