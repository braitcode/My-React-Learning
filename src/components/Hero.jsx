// this is just a simple  react component

import React from 'react'
// import hero from "../assets/images/black-spider-man-artwork-5k-x0.jpg"

const Hero = (props) => {
    // destructuring the props
    const {heading="Welcome to my page", image} = props
  return (
    <div style={{backgroundColor: "purple"}}>
        <div className="">
            <img src={image} alt="" height="200px" />
        </div>
        {/* <h1>Welcome to my page</h1> */}
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero