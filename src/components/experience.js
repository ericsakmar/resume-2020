import React from "react"

import Place from "./place"

export default ({ experience }) => {
  const employers = experience.map(e => <Place key={e.name} {...e} />)

  return (
    <>
      <h2>experience</h2>
      {employers}
    </>
  )
}
