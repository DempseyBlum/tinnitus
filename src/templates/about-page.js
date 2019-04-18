import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({
    main
}) => (
    <div>
        <div>{main.title}</div>
        <div>{topics.map(topic => (
          <div>
              <div>{topic.heading}</div>
              <div>{topic.body}</div>
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
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
query AboutPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "about-page"}}) {
    frontmatter {
        main {
          title
          topics {
            heading
            body
          }
        }
    }
  }
}
`
