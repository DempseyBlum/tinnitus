import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const HomePageTemplate = ({
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
        <div>{supportUs.heading}</div>
        <div>{supportUs.body}</div>
    </div>
)

HomePageTemplate.propTypes = {
  main: PropTypes.object,
  sidebar: PropTypes.object,
  donate: PropTypes.object
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        main = {frontmatter.main}
        sidebar = {frontmatter.sidebar}
        supportUs = {frontmatter.donate}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
query HomePageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
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
