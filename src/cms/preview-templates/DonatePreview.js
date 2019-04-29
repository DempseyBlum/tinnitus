import React from 'react'
import PropTypes from 'prop-types'
import { DonateTemplate } from '../../templates/donate'

const DonatePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      // this is where the home page template component would be rendered
      <DonateTemplate
        heading = {entry.getIn(['data', 'heading'])}
        description = {entry.getIn(['data', 'description'])}
        address = {entry.getIn(['data', 'address'])}
      />
    )
  } else {
    return (<div>Loading...</div>)
  }
}

DonatePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}
export default DonatePreview
