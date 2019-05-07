import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProtectionPageTemplate = ({
    title,
    topics
}) => (
    <div>
        <div>{title}</div>
        <div>{topics.map(topic => (
          <div>
              <div>{topic.topicHeading}</div>
              <div>{topic.topicBody}</div>
          </div>
        ))}
        </div>
    </div>
)

ProtectionPageTemplate.propTypes = {
  title: PropTypes.string,
  topics: PropTypes.object
}

const ProtectionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProtectionPageTemplate
        title = {frontmatter.title}
        topics = {frontmatter.topics}
      />
    </Layout>
  )
}

ProtectionPage.propTypes = {
  data: PropTypes.object,
}

export default ProtectionPage

export const protectionPageQuery = graphql`
query ProtectionPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
      topics {
        topicHeading
        topicBody
      }
    }
  }
}
`
