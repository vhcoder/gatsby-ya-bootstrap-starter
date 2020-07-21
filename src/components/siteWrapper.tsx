import React from "react";
import Header from "./header";
import SiteContent from "./siteContent";
import Footer from "./footer";


const SiteWrapper=({children})=>(
    <>
      <Header />
        <SiteContent children={children} />
      <Footer/>
    </>
)
export default SiteWrapper;