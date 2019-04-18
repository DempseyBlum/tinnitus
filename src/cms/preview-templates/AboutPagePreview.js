import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      // this is where the home page template component would be rendered
      <AboutPageTemplate
        main = {frontmatter.main}
        sidebar = {frontmatter.sidebar}
        supportUs = {frontmatter.donate}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}
export default AboutPagePreview
