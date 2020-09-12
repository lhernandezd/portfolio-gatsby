import React from "react"
import { AiFillTool } from "react-icons/ai"
import CustomLink from "../components/customLink";

const Card = props => {
  const { containerClass, title, dateString, project, description, list} = props;
  return (
    <div className={`${containerClass} cards__card`}>
      <div className="card__info">
        <h3>{title}</h3>
        <p className="info__date">{dateString}</p>
        <p className="info__link">
          {project ?
            <CustomLink
              withLinkIcon
              link={project.link}
              title={project.title}
              linkAttrs={{
                target: "_blank"
              }}
            />
          :
          <>
            In development
            <AiFillTool style={{ marginLeft: 5, verticalAlign: 'middle' }}/>
          </>
          }
        </p>
        <p className="info__description">{description}</p>
        <div className="info__list">
          <p className="list__title">{list.title}:</p>
          <ul>
            {list.items.map(item =>
              <li className="list__item">{item}.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
