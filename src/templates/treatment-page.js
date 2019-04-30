import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const TreatmentPageTemplate = ({
    title,
    treatments
}) => (
    <div>
        <div>{title}</div>
        <div>{treatments.map(treatment => (
          <div>
              <div>{treatment.treatmentHeading}</div>
              <div>{treatment.treatmentBody}</div>
          </div>
        ))}
        </div>
    </div>
)

TreatmentPageTemplate.propTypes = {
  title: PropTypes.string,
  topics: PropTypes.object
}

const TreatmentPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TreatmentPageTemplate
        title = {frontmatter.title}
        treatments = {frontmatter.treatments}
      />
    </Layout>
  )
}

TreatmentPage.propTypes = {
  data: PropTypes.object,
}

export default TreatmentPage

export const treatmentPageQuery = graphql`
query TreatmentPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
      treatments {
        treatmentHeading
        treatmentBody
      }
    }
  }
}
`
