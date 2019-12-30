import React from "react"

import Place from "./place"

export default ({ experience }) => {
  const employers = experience.map(e => <Place key={e.name} {...e} />)

  return (
    <>
      <h2>Professional Experience</h2>
      {employers}
    </>
  )
}
