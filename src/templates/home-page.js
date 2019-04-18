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
        {main.heading}
        {main.body}
        {main.heading2}
        {main.body2}
        {main.heading3}
        {main.body3}
        {sidebar.heading4}
        {sidebar.body4}
        {sidebar.heading5}
        {sidebar.body5}
        {donate.heading6}
        {donate.body6}
    </div>
)

HomePageTemplate.propTypes = {
  main: PropTypes.list,
  sidebar: PropTypes.list,
  donate: PropTypes.list
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        main = {frontmatter.sidebar}
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
