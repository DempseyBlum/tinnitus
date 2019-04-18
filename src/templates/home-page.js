import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const HomePageTemplate = ({
    main,
    sidebar,
    donate
}) => (
    <div>
        <div>{main.heading}</div>
        <div>{main.body}</div>
        <div>{main.heading2}</div>
        <div>{main.body2}</div>
        <div>{main.heading3}</div>
        <div>{main.body3}</div>
        <div>{sidebar.heading4}</div>
        <div>{sidebar.body4}</div>
        <div>{sidebar.heading5}</div>
        <div>{sidebar.body5}</div>
        <div>{donate.heading6}</div>
        <div>{donate.body6}</div>
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
        donate = {frontmatter.donate}
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
          heading
          body
          heading2
          body2
          heading3
          body3
        }
        sidebar {
            heading4
            body4
            heading5
            body5
        }
        donate {
            heading6
            body6
        }
    }
  }
}
`
