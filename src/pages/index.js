import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

const IndexPage = ({ data }) => {
  const resume = data.allDataJson.edges[0].node
  const { basics } = resume
  const { name, email, phone, url, profiles } = basics

  return (
    <Layout>
      <SEO title="Home" />
      <Header name={name} />
      <Contact email={email} phone={phone} url={url} profiles={profiles} />
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
        }
      }
    }
  }
`

export default IndexPage
