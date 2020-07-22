import { useStaticQuery, graphql } from "gatsby"

const SiteInfo = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
            heroContent{
            title,
            subTitle
          }
        },
      }
    }
  `)


 return data;
}

export default SiteInfo;