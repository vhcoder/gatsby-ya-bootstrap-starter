/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/sitewide.scss"
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from "react";

import SiteWrapper from "./src/components/siteWrapper";

export const wrapPageElement = ({ element, props }) => (
    <SiteWrapper {...props}>{element}</SiteWrapper>
  );