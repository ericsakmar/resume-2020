import React from "react"

import Place from "./place"

export default ({ experience }) => {
  const employers = experience.map(e => <Place key={e.name} {...e} />)

  return (
    <section>
      <h2>Professional Experience</h2>
      {employers}
    </section>
  )
}
