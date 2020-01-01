import React from "react"

import Place from "./place"

const toPlace = award => ({
  name: award.title,
  location: award.awarder,
  summary: award.summary,
  positions: [
    {
      title: "Certification",
      startDate: award.startDate,
      endDate: award.endDate,
    },
  ],
  highlights: [],
})

export default ({ awards }) => {
  const places = awards.map(e => <Place key={e.title} {...toPlace(e)} />)

  return (
    <section>
      <h2>Certifications</h2>
      {places}
    </section>
  )
}
