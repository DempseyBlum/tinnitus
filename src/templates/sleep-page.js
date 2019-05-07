import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const SleepPageTemplate = ({
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

SleepPageTemplate.propTypes = {
  title: PropTypes.string,
  topics: PropTypes.object
}

const SleepPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SleepPageTemplate
        title = {frontmatter.title}
        topics = {frontmatter.topics}
      />
    </Layout>
  )
}

SleepPage.propTypes = {
  data: PropTypes.object,
}

export default SleepPage

export const sleepPageQuery = graphql`
query SleepPage($id: String!) {
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
