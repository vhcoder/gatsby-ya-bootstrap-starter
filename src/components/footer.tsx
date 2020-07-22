import React from 'react';


const Footer=()=>(
    <footer className="footer container-fluid">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>

)

export default Footer;