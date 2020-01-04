import React from "react"

export default ({ summary, skills }) => {
  const skillItems = skills.map(s => <li key={s}>{s}</li>)

  return (
    <div className="summary">
      <p>{summary}</p>
      <ul className="styled-list skills">{skillItems}</ul>
    </div>
  )
}
