import React from "react"
import { Mail, Phone, Home, GitHub, Codepen, Linkedin } from "react-feather"

// TODO a11y and microformats

const getSocialIcon = network => {
  switch (network) {
    case "GitHub":
      return <GitHub className="contact-icon" size="1em" />
    case "CodePen":
      return <Codepen className="contact-icon" size="1em" />
    case "LinkedIn":
      return <Linkedin className="contact-icon" size="1em" />
    default:
      return <div />
  }
}

const formatUrl = url => url.replace("https://", "")

export default ({ email, phone, url, profiles }) => {
  const links = profiles.map(p => (
    <li key={p.network} className="contact-item">
      {getSocialIcon(p.network)}
      <a href={p.url}>{formatUrl(p.url)}</a>
    </li>
  ))

  return (
    <ul className="contact">
      <li className="contact-item">
        <Mail className="contact-icon" size="1em" />
        <a href={`mailto:${email}`}>{email}</a>
      </li>

      <li className="contact-item">
        <Phone className="contact-icon" size="1em" />
        <a href={`tel:${phone}`}>{phone}</a>
      </li>

      <li className="contact-item">
        <Home className="contact-icon" size="1em" />
        <a href={url}>{formatUrl(url)}</a>
      </li>

      {links}
    </ul>
  )
}
