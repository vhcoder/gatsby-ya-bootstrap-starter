import React from 'react';
import { Jumbotron } from "react-bootstrap";
import SiteInfo from "./siteInfo";




export const Hero =()=>{
    const data= SiteInfo();
    return (
            <Jumbotron>
               <div className="display-2"> {data.site.siteMetadata.heroContent.title}</div>
               <div className="display-4"> {data.site.siteMetadata.heroContent.subTitle}</div>
            </Jumbotron>
    )
}