import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      // this is where the home page template component would be rendered
      <HomePageTemplate
        main = {entry.getIn(['data', 'main'])}
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
}
export default HomePagePreview
