import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const DonateTemplate = ({
    heading,
    description,
    address
}) => (
    <div>
        <div>{heading}</div>
        <div>{description}</div>
        <div>{address.name}</div>
        <div>{address.street}</div>
        <div>{address.city}</div>
        <div>{address.state}</div>
        <div>{address.postCode}</div>
        <div>{address.country}</div>
    </div>
)


DonateTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.object
}

const Donate = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <DonateTemplate
        heading = {frontmatter.heading}
        description = {frontmatter.description}
        address = {frontmatter.address}
      />
    </Layout>
  )
}


Donate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Donate

export const donateQuery = graphql`
query DonateTemplate {
	markdownRemark(frontmatter: {templateKey: {eq: "donate"}}) {
		frontmatter {
			heading
			description
			address {
        name
				street
				city
				state
				postCode
				country
			}
		}
	}
}
`