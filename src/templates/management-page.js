import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ManagementPageTemplate = ({
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

ManagementPageTemplate.propTypes = {
  title: PropTypes.string,
  topics: PropTypes.object
}

const ManagementPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ManagementPageTemplate
        title = {frontmatter.title}
        topics = {frontmatter.topics}
      />
    </Layout>
  )
}

ManagementPage.propTypes = {
  data: PropTypes.object,
}

export default ManagementPage

export const managementPageQuery = graphql`
query ManagementPage($id: String!) {
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
