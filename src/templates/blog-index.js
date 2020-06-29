import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Columns, Column } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import BlogHeader from '../components/Blog/BlogHeader'
import BlogCoffee from '../components/Blog/BlogCoffee'
import BlogList from '../components/Blog/BlogList'

const BlogPostTemplate = ({
  data: { posts },
  pageContext: { humanPageNumber },
}) => {
  const sectionTitle = humanPageNumber === 1 ? 'Latest Posts' : 'Previous Posts'
  return (
    <Layout>
      <BlogHeader />
      <PageBlock>
        <Columns>
          <Column spread={7}>
            <BlogList title={sectionTitle} edges={posts.edges} />
          </Column>
          <Column spread={4} spreadOffset={1}>
            <BlogCoffee invert={true} />
          </Column>
        </Columns>
      </PageBlock>
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }),
  pageContext: PropTypes.shape({
    humanPageNumber: PropTypes.number,
    numberOfPages: PropTypes.number,
    previousPagePath: PropTypes.string,
    nextPagePath: PropTypes.string,
  }),
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fields: { format: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 500, truncate: false)
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  }
`