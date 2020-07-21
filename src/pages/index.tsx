import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import SiteInfo from "../components/siteInfo"
import { Hero } from "../components/hero"
import SiteContent from "../components/siteContent"


const IndexPage = () => {

  const data= SiteInfo();

  return (
    <>
    <Hero/>
    <SiteContent>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </SiteContent>
  </>

  )

  }
export default IndexPage
