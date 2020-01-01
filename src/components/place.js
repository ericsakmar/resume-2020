import React from "react"
import { format, isValid } from "date-fns"

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
    <tr key={p.title}>
      <td>{p.title}</td>
      <td className="positions-when">
        {formatDate(p.startDate)} <span className="muted">to</span>{" "}
        {formatDate(p.endDate)}
      </td>
    </tr>
  ))

  return (
    <table className="positions">
      <tbody>{rows}</tbody>
    </table>
  )
}

const Highlights = ({ highlights }) => {
  const rows = highlights.map((h, i) => <li key={i}>{h}</li>)

  return <ul>{rows}</ul>
}

export default Place
