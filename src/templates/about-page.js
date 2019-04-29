import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({
    main
}) => (
    <div>
        <div>{main.title}</div>
        <div>{main.topics.map(topic => (
          <div>
              <div>{topic.topicHeading}</div>
              <div>{topic.topicBody}</div>
          </div>
        ))}
        </div>
    </div>
)

AboutPageTemplate.propTypes = {
  main: PropTypes.object,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        main = {frontmatter.main}
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
      main {
        title
        topics {
          topicHeading
          topicBody
        }
      }
    }
  }
}
`
