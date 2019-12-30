import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Experience from "../components/experience"

const IndexPage = ({ data }) => {
  const resume = data.allDataJson.edges[0].node
  const { basics } = resume
  const { name, email, phone, url, profiles } = basics
  const { work } = resume

  return (
    <Layout>
      <SEO title="Home" />
      <Header name={name} />
      <Contact email={email} phone={phone} url={url} profiles={profiles} />
      <Experience experience={work} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          basics {
            name
            email
            phone
            url
            profiles {
              url
            }
          }
          work {
            highlights
            location
            name
            positions {
              startDate
              title
              endDate
            }
            summary
          }
        }
      }
    }
  }
`

export default IndexPage
