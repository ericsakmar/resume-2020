import React from "react"
import { Code } from "react-feather"

export default ({
  summary,
  currentSkills,
  currentInterests,
  previousSkills,
}) => {
  const currentSkillItems = currentSkills.map(s => (
    <li key={s} className="icon-list-item">
      <Code className="icon-list-icon" />
      {s}
    </li>
  ))

  const currentInterestItems = currentInterests.map(s => (
    <li key={s} className="icon-list-item">
      <Code className="icon-list-icon" />
      {s}
    </li>
  ))

  const previousSkillItems = previousSkills.map(s => (
    <li key={s} className="icon-list-item">
      <Code className="icon-list-icon" />
      {s}
    </li>
  ))

  return (
    <div className="summary">
      <p>{summary}</p>

      <h4>Currently working with:</h4>
      <ul className="icon-list skills">{currentSkillItems}</ul>

      <h4>Currently interested in:</h4>
      <ul className="icon-list skills">{currentInterestItems}</ul>

      <h4>Previously worked with:</h4>
      <ul className="icon-list skills">{previousSkillItems}</ul>
    </div>
  )
}
