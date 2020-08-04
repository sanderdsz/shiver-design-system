import * as React from 'react'
import { Link, useConfig } from 'docz'

import './styles.scss'

export const Logo = () => {
  const config = useConfig()
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src="https://svgshare.com/i/NVw.svg"/>
        </Link>
      </div>
        <div className="title">
          <div>
            <Link to="/" className="link">
              {config.title}
            </Link>
          </div>
        </div>
    </div>
  )
}