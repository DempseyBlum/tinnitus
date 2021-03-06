import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  topics: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        title = {frontmatter.title}
        topics = {frontmatter.topics}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object,
}

export default AboutPage

export const aboutPageQuery = graphql`
query AboutPage($id: String!) {
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
