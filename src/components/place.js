import React from "react"

const Place = ({ name, location, positions, summary, highlights }) => {
  return (
    <>
      <h4>
        {name} | {location}
      </h4>
      <Positions positions={positions} />
      <p>{summary}</p>
      <Highlights highlights={highlights} />
    </>
  )
}

const Positions = ({ positions }) => {
  const rows = positions.map(p => (
    <tr>
      <td>{p.title}</td>
      <td>
        {p.startDate} to {p.endDate}
      </td>
    </tr>
  ))

  return <table>{rows}</table>
}

const Highlights = ({ highlights }) => {
  const rows = highlights.map(h => <li>{h}</li>)

  return <ul>{rows}</ul>
}

export default Place
