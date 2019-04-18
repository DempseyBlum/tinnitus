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
  main: PropTypes.object,
  sidebar: PropTypes.object,
  donate: PropTypes.object
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        main = {{
          heading: entry.getIn(['data', 'main', 'heading']),
          body: entry.getIn(['data', 'main', 'body']),
          heading2: entry.getIn(['data', 'main', 'heading2']),
          body2: entry.getIn(['data', 'main', 'body2']),
          heading3: entry.getIn(['data', 'main', 'heading3']),
          body3: entry.getIn(['data', 'main', 'body3'])
        }}
        sidebar = {{
          heading4: entry.getIn(['data', 'sidebar', 'heading4']),
          body4: entry.getIn(['data', 'sidebar', 'body4']),
          heading5: entry.getIn(['data', 'sidebar', 'heading5']),
          body5: entry.getIn(['data', 'sidebar', 'body5'])
        }}
        donate = {{
          heading6: entry.getIn(['data', 'donate', 'heading6']),
          body6: entry.getIn(['data', 'donate', 'body6'])
        }}
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
