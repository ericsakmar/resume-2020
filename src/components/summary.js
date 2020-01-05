import React from "react"
import { Code } from "react-feather"

export default ({ summary, skills }) => {
  const skillItems = skills.map(s => (
    <li key={s} className="icon-list-item">
      <Code className="icon-list-icon" />
      {s}
    </li>
  ))

  return (
    <div className="summary">
      <p>{summary}</p>
      <p>Currently working with:</p>
      <ul className="icon-list skills">{skillItems}</ul>
    </div>
  )
}
