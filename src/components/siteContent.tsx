/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

const SiteContent = ({ children }) => {

  return (
    <>
      <div className='container-fluid' >
        <main>{children}</main>
      </div>
    </>
  )
}

export default SiteContent;
