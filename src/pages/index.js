import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Experience from "../components/experience"
import Education from "../components/education"

const IndexPage = ({ data }) => {
  const resume = data.allDataJson.edges[0].node
  const { basics, work, education } = resume
  const { name, email, phone, url, profiles } = basics

  return (
    <Layout>
      <SEO title="Home" />
      <Header name={name} />
      <Contact email={email} phone={phone} url={url} profiles={profiles} />
      <Experience experience={work} />
      <Education education={education} />
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
              network
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
          education {
            institution
            location
            area
            endDate
            startDate
            studyType
            summary
          }
        }
      }
    }
  }
`

export default IndexPage
