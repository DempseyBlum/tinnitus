import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      // this is where the home page template component would be rendered
      <HomePageTemplate
        main = {frontmatter.main}
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
export default HomePagePreview
