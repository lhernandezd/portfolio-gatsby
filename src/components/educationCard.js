import React from "react"
import CustomLink from "../components/customLink"

const Card = (props) => {
  const { containerClass, title, dateString, education, description } = props
  return (
    <div className={`${containerClass} cards__card`}>
      <div className="card__info">
        <h3>{title}</h3>
        <p className="info__date">
          <b>Graduated:</b> {dateString}
        </p>
        <p className="info__link">
          <CustomLink
            withLinkIcon
            link={education.link}
            title={education.title}
            linkAttrs={{
              target: "_blank",
            }}
          />
        </p>
        <p className="info__description">{description}</p>
      </div>
    </div>
  )
}

export default Card
