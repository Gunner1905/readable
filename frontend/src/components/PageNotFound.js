import React from 'react'
import PageNotFound from '../components/images/PageNotFound.png';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
		<img src={PageNotFound} style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} />

		<Link to="/">Return to Home Page </Link>

    </div>
  )
}