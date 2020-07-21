import { useStaticQuery, graphql } from "gatsby"

const SiteInfo = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


 return data;
}

export default SiteInfo;