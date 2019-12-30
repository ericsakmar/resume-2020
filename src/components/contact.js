import React from "react"

export default ({ email, phone, url, profiles }) => {
  const links = profiles.map(p => <li key={p.url}>{p.url}</li>)

  return (
    <ul>
      <li>{email}</li>
      <li>{phone}</li>
      <li>{url}</li>
      {links}
    </ul>
  )
}
