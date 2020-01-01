import React from "react"

export default ({ summary, skills }) => {
  const skillItems = skills.map(s => <li key={s}>{s}</li>)

  return (
    <>
      <p>{summary}</p>
      <ul className="skills">{skillItems}</ul>
    </>
  )
}
