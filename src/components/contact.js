import React from "react"
import {
  Mail,
  Phone,
  Home,
  GitHub,
  Codepen,
  Linkedin,
  MapPin,
} from "react-feather"

const getSocialIcon = network => {
  switch (network) {
    case "GitHub":
      return <GitHub className="icon-list-icon" aria-hidden="true" />
    case "CodePen":
      return <Codepen className="icon-list-icon" aria-hidden="true" />
    case "LinkedIn":
      return <Linkedin className="icon-list-icon" aria-hidden="true" />
    default:
      return <div />
  }
}

const formatUrl = url => url.replace("https://", "")

export default ({ email, phone, url, profiles, location }) => {
  const links = profiles.map(p => (
    <li key={p.network} className="icon-list-item contact-item">
      {getSocialIcon(p.network)}
      <a href={p.url}>{formatUrl(p.url)}</a>
    </li>
  ))

  return (
    <ul className="icon-list contact">
      <li className="icon-list-item contact-item">
        <Mail className="icon-list-icon" aria-hidden="true" />
        <a href={`mailto:${email}`}>{email}</a>
      </li>

      <li className="icon-list-item contact-item">
        <Phone className="icon-list-icon" aria-hidden="true" />
        <a href={`tel:${phone}`}>{phone}</a>
      </li>

      <li className="icon-list-item contact-item">
        <Home className="icon-list-icon" aria-hidden="true" />
        <a href={url}>{formatUrl(url)}</a>
      </li>

      {links}

      <li className="icon-list-item contact-item">
        <MapPin className="icon-list-icon" aria-hidden="true" />
        {location.city}, {location.region}
      </li>
    </ul>
  )
}
