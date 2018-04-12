import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div>
      <nav className="navbar bg-light">
      <Link className="navbar-brand text-dark" to="/">Udacity Readable Project</Link>
      </nav>
    </div>
  )
}

export default Title