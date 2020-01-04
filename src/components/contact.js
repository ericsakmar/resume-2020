import React from "react"
import { Mail, Phone, Home, GitHub, Codepen, Linkedin } from "react-feather"

// TODO a11y and microformats

const getSocialIcon = network => {
  switch (network) {
    case "GitHub":
      return <GitHub className="icon-list-icon" />
    case "CodePen":
      return <Codepen className="icon-list-icon" />
    case "LinkedIn":
      return <Linkedin className="icon-list-icon" />
    default:
      return <div />
  }
}

const formatUrl = url => url.replace("https://", "")

export default ({ email, phone, url, profiles }) => {
  const links = profiles.map(p => (
    <li key={p.network} className="icon-list-item contact-item">
      {getSocialIcon(p.network)}
      <a href={p.url}>{formatUrl(p.url)}</a>
    </li>
  ))

  return (
    <ul className="icon-list contact">
      <li className="icon-list-item contact-item">
        <Mail className="icon-list-icon" />
        <a href={`mailto:${email}`}>{email}</a>
      </li>

      <li className="icon-list-item contact-item">
        <Phone className="icon-list-icon" />
        <a href={`tel:${phone}`}>{phone}</a>
      </li>

      <li className="icon-list-item contact-item">
        <Home className="icon-list-icon" />
        <a href={url}>{formatUrl(url)}</a>
      </li>

      {links}
    </ul>
  )
}
