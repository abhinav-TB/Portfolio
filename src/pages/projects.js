import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {

  return(
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="All projects"/>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        featured
        title
        url
        image{

          childImageSharp{
            fluid(maxWidth: 3080, quality: 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
