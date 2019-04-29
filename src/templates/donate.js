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
        <div>{address}</div>
    </div>
)

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
  heading: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.object
}

export default Donate

export const donateQuery = graphql`
query Donate {
	markdownRemark(frontmatter: {templateKey: {eq: "donate"}}) {
		frontmatter {
			heading
			description
			address {
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