import React from "react"

import Place from "./place"

const toPlace = education => ({
  name: education.institution,
  location: education.location,
  summary: education.summary,
  positions: [
    {
      title: `${education.studyType}, ${education.area}`,
      startDate: education.startDate,
      endDate: education.endDate,
    },
  ],
  highlights: [],
})

export default ({ education }) => {
  const places = education.map(e => (
    <Place key={e.institution} {...toPlace(e)} />
  ))

  return (
    <>
      <h2>education</h2>
      {places}
    </>
  )
}
