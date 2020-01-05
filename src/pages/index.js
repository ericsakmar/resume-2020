import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Experience from "../components/experience"
import Education from "../components/education"
import Awards from "../components/awards"
import Summary from "../components/summary"

const IndexPage = ({ data }) => {
  const resume = data.allDataJson.edges[0].node
  const { basics, work, education, awards } = resume
  const { name, email, phone, url, profiles, summary, skills } = basics

  return (
    <Layout>
      <SEO title="Home" description={summary} />
      <Header name={name} />
      <Contact email={email} phone={phone} url={url} profiles={profiles} />
      <Summary summary={summary} skills={skills} />
      <Experience experience={work} />
      <Awards awards={awards} />
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
            summary
            skills
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
          awards {
            awarder
            startDate
            endDate
            summary
            title
          }
        }
      }
    }
  }
`

export default IndexPage
