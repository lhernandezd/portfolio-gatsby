import React from "react"
import { HiOutlineExternalLink } from "react-icons/hi"

const CustomLink = props => {
  const { link, title, icon: Icon, shape, linkAttrs, withLinkIcon} = props;
  return (
    <a
      {...linkAttrs}
      href={link}
      rel="noopener noreferrer"
    >
      {Icon && <Icon className={`link-${shape}`} />}
      {` `}
      {title}
      {withLinkIcon && <HiOutlineExternalLink className="link__icon" />}
    </a>
  )
}

export default CustomLink
