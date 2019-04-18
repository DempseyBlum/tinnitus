import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      // this is where the home page template component would be rendered
      <HomePageTemplate
        heading = {entry.getIn(['data', 'heading'])}
        body = {entry.getIn(['data', 'body'])}
        heading2 = {entry.getIn(['data', 'heading2'])}
        body2 = {entry.getIn(['data', 'body2'])}
        heading3 = {entry.getIn(['data', 'heading3'])}
        body3 = {entry.getIn(['data', 'body3'])}
        sidebar = {{
          heading4: entry.getIn(['data', 'sidebar', 'heading4']),
          body4: entry.getIn(['data', 'sidebar', 'body4']),
          heading5: entry.getIn(['data', 'sidebar', 'heading5']),
          body5: entry.getIn(['data', 'sidebar', 'body5'])
        }}
        donate = {{
          heading6: entry.getIn(['data', 'donate', 'heading6']),
          body6: entry.getIn(['data', 'donate', 'body6'])
        }}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
