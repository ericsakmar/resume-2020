import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

// import SEO from "../components/seo"
// <SEO title="Home" description={summary} />

const StuffPage = ({ data }) => {
  return (
    <Layout>
      <h1>latest</h1>

      <div className="latest-project">
        <Img
          className="big-album-cover"
          fluid={data.arrive.childImageSharp.fluid}
        />

        <iframe
          title="Arrive by Spaces"
          className="bandcamp-player"
          src="https://bandcamp.com/EmbeddedPlayer/album=2157362934/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
          seamless
        >
          <a href="https://spacesspacesspaces.bandcamp.com/album/arrive">
            Arrive by Spaces
          </a>
        </iframe>
      </div>

      <h2>older projects</h2>
      <div className="projects-grid">
        <a
          href="https://therealsea.bandcamp.com/track/waitin-for-a-superman"
          className="project"
        >
          <Img fluid={data.superman.childImageSharp.fluid} />
        </a>

        <a
          href="https://spacesspacesspaces.bandcamp.com/album/embark"
          className="project"
        >
          <Img fluid={data.embarkCover.childImageSharp.fluid} />
        </a>

        <a
          href="https://showpony.bandcamp.com/album/pony-up"
          className="project"
        >
          <Img fluid={data.ponyUp.childImageSharp.fluid} />
        </a>

        <a
          href="https://showpony.bandcamp.com/album/pony-down"
          className="project"
        >
          <Img fluid={data.ponyDown.childImageSharp.fluid} />
        </a>

        <a
          href="https://therealsea.bandcamp.com/track/panama-2"
          className="project"
        >
          <Img fluid={data.panama.childImageSharp.fluid} />
        </a>

        <a
          href="https://therealsea.bandcamp.com/track/sure-thing"
          className="project"
        >
          <Img fluid={data.sureThing.childImageSharp.fluid} />
        </a>

        <a
          href="https://thevelvetants.bandcamp.com/album/arrows-always-2019"
          className="project"
        >
          <Img fluid={data.arrowsAlways.childImageSharp.fluid} />
        </a>

        <a
          href="https://showpony.bandcamp.com/album/arrow-smith"
          className="project"
        >
          <Img fluid={data.arrowSmith.childImageSharp.fluid} />
        </a>

        <a
          href="https://thevelvetants.bandcamp.com/album/solt-olio-2013"
          className="project"
        >
          <Img fluid={data.soltOlio.childImageSharp.fluid} />
        </a>

        <a href="https://soundcloud.com/runsilentrundeep" className="project">
          <Img fluid={data.rsrd.childImageSharp.fluid} />
        </a>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    embarkCover: file(relativePath: { eq: "spaces-embark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    arrive: file(relativePath: { eq: "spaces-arrive.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    ponyUp: file(relativePath: { eq: "showpony-pony-up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    ponyDown: file(relativePath: { eq: "showpony-pony-down.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    panama: file(relativePath: { eq: "trs-panama.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    sureThing: file(relativePath: { eq: "trs-sure-thing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    arrowsAlways: file(relativePath: { eq: "tva-arrows-always.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    arrowSmith: file(relativePath: { eq: "showpony-arrow-smith.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    soltOlio: file(relativePath: { eq: "tva-solt-olio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    rsrd: file(relativePath: { eq: "rsrd.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    superman: file(relativePath: { eq: "superman.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default StuffPage
