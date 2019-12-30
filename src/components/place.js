import React from "react"

const Place = ({ name, location, positions, summary, highlights }) => {
  return (
    <>
      <h4>
        {name} - {location}
      </h4>

      <Positions positions={positions} />

      <p>{summary}</p>

      <Highlights highlights={highlights} />
    </>
  )
}

const Positions = ({ positions }) => {
  const rows = positions.map(p => (
    <tr key={p.title}>
      <td>{p.title}</td>
      <td className="positions-when">
        {p.startDate} to {p.endDate}
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
