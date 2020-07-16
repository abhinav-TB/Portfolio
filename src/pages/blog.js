import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
  return (
    <Layout>
      <section classname ="blog-page">
        <Blogs blogs={blogs} title="blog"/>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        desc
        date(formatString: "MM Do, YYY")
        slug
        title
        content
        category
        image {
          childImageSharp {
            fluid(maxWidth: 3080, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`