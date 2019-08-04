import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  sizes(maxWidth: 600, maxHeight: 360) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.filename)
        })
        if (!image) {
          return null
        }

        const imageSizes = image.node.childImageSharp.sizes
        return <Img alt={props.alt} sizes={imageSizes} />
      }}
    />
  )
}

export default Image