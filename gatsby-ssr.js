import SiteWrapper from "./src/components/siteWrapper";

export const wrapPageElement = ({ element, props }) => (
    <SiteWrapper {...props}>{element}</SiteWrapper>
  );