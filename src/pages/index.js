import React from "react"
import { graphql } from "gatsby"

import Basics from "../components/basics"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const resume = data.allDataJson.edges[0].node

  return (
    <Layout>
      <SEO title="Home" />
      <Basics {...resume.basics} />
    </Layout>
  )
}

export const query = graphql`
  query Basics {
    allDataJson {
      edges {
        node {
          basics {
            name
            email
          }
        }
      }
    }
  }
`
export default IndexPage
