import React from "react";
import Navs from "../components/Nav"
import "../css/About.css"
import Hero from "../components/Hero"
import img1 from "../assets/images/joker-green-grin-5o.jpg"
import img2 from "../assets/images/black-spider-man-artwork-5k-x0.jpg"

function About () {

    // JSX
  const myJsx = <h3>This is awesome JSX</h3>

  // myFavFood
  const food = ["amala", "tuwo", "jollof", "spaghetti"]
  const myStyle = {listStyle: "none", color: "red", backgroundColor: "#eee", width: "50%", marginInline: "auto"}  // this is how to do internal css styling

   
  return (
    <>
    {/* <Navs/> */}
    <Hero heading="Welcome to About Page" image={img2}/>
    <div>
      <div>
        <h1>Blard's React App 1.0</h1>
        {myJsx}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis soluta
        dicta, doloremque officia nisi dolorum sed placeat nihil aliquid optio.
      </p>

      {/* map through food array */}
      <h3>My favourite food</h3>
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
            <p>My favourite food is {f}</p>
          </div>
        );
      })}
    </div>
    </>
  );

};

export default About;