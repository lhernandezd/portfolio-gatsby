import React, { Fragment, useEffect } from "react"

import { Link } from "gatsby"

const Drawer = ({ setOpen, pages }) => {
  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <Fragment>
      <div className="drawer__links">
        {pages.map(page => (
          <Link className="link" to={`/${page}/`}>
            {`${page[0].toUpperCase()}${page.slice(1)}`}
          </Link>
        ))}
      </div>
    </Fragment>
  )
}

export default Drawer
