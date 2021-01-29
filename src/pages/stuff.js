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

      <div class="video-wrapper">
        <iframe
          class="video-iframe"
          src="https://www.youtube.com/embed/zSPflsSFAqE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <iframe
        style={{ border: 0, width: "100%", height: "120px" }}
        src="https://bandcamp.com/EmbeddedPlayer/track=3111595504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
        seamless
      >
        <a href="https://therealsea.bandcamp.com/track/waitin-for-a-superman">
          Waitin&#39; For A Superman by The Real Sea
        </a>
      </iframe>

      <h2>older projects</h2>

      <div className="projects-grid">
        <a href="https://spacesspacesspaces.bandcamp.com/album/embark">
          <Img fluid={data.embarkCover.childImageSharp.fluid} />
        </a>

        <a href="https://showpony.bandcamp.com/album/pony-up">
          <Img fluid={data.ponyUp.childImageSharp.fluid} />
        </a>

        <a href="https://showpony.bandcamp.com/album/pony-down">
          <Img fluid={data.ponyDown.childImageSharp.fluid} />
        </a>

        <a href="https://therealsea.bandcamp.com/track/panama-2">
          <Img fluid={data.panama.childImageSharp.fluid} />
        </a>

        <a href="https://therealsea.bandcamp.com/track/sure-thing">
          <Img fluid={data.sureThing.childImageSharp.fluid} />
        </a>

        <a href="https://thevelvetants.bandcamp.com/album/arrows-always-2019">
          <Img fluid={data.arrowsAlways.childImageSharp.fluid} />
        </a>

        <a href="https://showpony.bandcamp.com/album/arrow-smith">
          <Img fluid={data.arrowSmith.childImageSharp.fluid} />
        </a>

        <a href="https://thevelvetants.bandcamp.com/album/solt-olio-2013">
          <Img fluid={data.soltOlio.childImageSharp.fluid} />
        </a>

        <a href="https://soundcloud.com/runsilentrundeep">
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
  }
`

export default StuffPage
