import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({
    main,
    sidebar,
    supportUs
}) => (
    <div>
        <div>{main.introHeading}</div>
        <div>{main.introBody}</div>
        <div>{main.welcomeHeading}</div>
        <div>{main.welcomeBody}</div>
        <div>{main.dvdTitle}</div>
        <div>{main.dvdDescription}</div>
        <div>{sidebar.map(entry => (
          <div>
              <div>{entry.heading}</div>
              <div>{entry.summary}</div>
              <div>{entry.links.map(link => (
                <div>
                  <div>{link.linkTitle}</div>
                  <div>{link.link}</div>
                </div>
              ))}
              </div>
          </div>
        ))}
        </div>
        <div>{supportUs.heading}</div>
        <div>{supportUs.body}</div>
    </div>
)

AboutPageTemplate.propTypes = {
  main: PropTypes.object,
  sidebar: PropTypes.object,
  donate: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        main = {frontmatter.main}
        sidebar = {frontmatter.sidebar}
        supportUs = {frontmatter.supportUs}
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
          introHeading
          introBody:
          welcomeHeading
          welcomeBody
      
          dvdTitle
          dvdDescription
      
        }
        sidebar {
          heading
          summary
          links{
            linkTitle
            link
          }
        }
        supportUs {
            heading
            body
        }
    }
  }
}
`
