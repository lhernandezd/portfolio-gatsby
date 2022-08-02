import React from "react"
import { AiFillTool } from "react-icons/ai"
import CustomLink from "../components/customLink"

const Card = props => {
  const {
    containerClass,
    title,
    dateString,
    company,
    description,
    list,
  } = props
  return (
    <div className={`${containerClass} cards__card`}>
      <div className="card__info">
        <h3>{title}</h3>
        <p className="info__date">{dateString}</p>
        <p className="info__link">
          {company ? (
            <CustomLink
              withLinkIcon
              link={company.link}
              title={company.name}
              linkAttrs={{
                target: "_blank",
              }}
            />
          ) : (
            <>
              In development
              <AiFillTool style={{ marginLeft: 5, verticalAlign: "middle" }} />
            </>
          )}
        </p>
        <p className="info__description">{description}</p>
        <div className="info__list">
          <p className="list__title">{list.title}:</p>
          <ul>
            {list.items.map((item, index) => (
              <li key={`${item}_${index}`} className="list__item">
                {item}.
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
