import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const HomePageTemplate = ({
    heading,
    body,
    heading2,
    body2,
    heading3,
    body3,
    sidebar,
    donate
}) => (
    <div>
        {heading}
        {body}
        {heading2}
        {body2}
        {heading3}
        {body3}
        {sidebar.heading4}
        {sidebar.body4}
        {sidebar.heading5}
        {sidebar.body5}
        {donate.heading6}
        {donate.body6}
    </div>
)

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        heading = {frontmatter.heading}
        body = {frontmatter.body}
        heading2 = {frontmatter.heading2}
        body2 = {frontmatter.body2}
        heading3 = {frontmatter.heading3}
        body3 = {frontmatter.body3}
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
        heading
        body
        heading2
        body2
        heading3
        body3
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
