import React from "react"
import { format, isValid } from "date-fns"
import { Circle } from "react-feather"

const formatDate = date =>
  isValid(new Date(date)) ? format(new Date(date), "MMMM yyyy") : date

const Place = ({ name, location, positions, summary, highlights }) => {
  return (
    <div className="place">
      <h4>
        {name} <span className="muted">-</span> {location}
      </h4>

      <Positions positions={positions} />

      <p>{summary}</p>

      <Highlights highlights={highlights} />
    </div>
  )
}

const Positions = ({ positions }) => {
  const rows = positions.map(p => (
    <div className="position" key={p.title}>
      <div>{p.title}</div>
      <div className="position-leaders"></div>
      <div className="positions-when">
        <span className="no-break">{formatDate(p.startDate)}</span> to{" "}
        <span className="no-break">{formatDate(p.endDate)}</span>
      </div>
    </div>
  ))

  return <div className="positions">{rows}</div>
}

const Highlights = ({ highlights }) => {
  const rows = highlights.map((h, i) => (
    <li className="icon-list-item icon-list-item--long" key={i}>
      <Circle className="icon-list-icon" aria-hidden="true" />
      {h}
    </li>
  ))

  return <ul className="icon-list">{rows}</ul>
}

export default Place
