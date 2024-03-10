import React from 'react'
import { NavLink } from 'react-router-dom'

const ConDetailCard = ({countries}) => {
  return (
    <div className='row' style={{height: "20rem", textAlign: "center"}}>
        <div className="col-12 col-md-6" style={{height: "20rem"}}>
            <img src={countries?.flags.png} alt="" width="100%" height="100%"/>
        </div>
        <div className="col-12 col-md-6">
            <h3>{countries?.subregion}</h3>
            <p>{countries?.timezones}</p>
            <p>{countries?.currencies}</p>
            <p>{countries?.borders}</p>
            <button>
            <NavLink to="/countries" style={{textDecoration: "none", color: "white"}}>
                Go Back!
              </NavLink>
            </button>
        </div>

    </div>
  )
}

export default ConDetailCard