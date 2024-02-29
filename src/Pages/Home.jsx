// add image
import img2 from "../assets/images/joker-green-grin-5o.jpg"
import img1 from "../assets/images/black-spider-man-artwork-5k-x0.jpg"
import Navs from "../components/Nav"
// import Spins from "../components/Loader"
import '../css/Home.css'
import Hero from "../components/Hero"

function Home () {
    return (
    <>
    {/* <Navs/> */}
    {/* <Spins/> */}
    <Hero heading="Welcome to Homepage" image={img2}/>
    {/* <ProductCard/> */}
    {/* <h1 className="bg-danger text-light">Welcome to Home Page</h1> */}
    
    </>

    )
    // 3 ways we can use css to style our work; inline, internal and external
    
}

export default Home