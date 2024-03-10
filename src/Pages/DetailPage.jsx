import React from 'react'
import ProductCard from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { data } from '../BD/ProductBD'
import DetailCard from '../components/DetailCard'

const DetailPage = () => {
    const {id} = useParams()
    console.log(`Item ${id} clicked`);
    console.log(data);

    // Go into the database and find the product with the id === productId
    const bright = data.find((p) => p.id === parseInt(id));
    // console.log(product);
  return (
    <div>
        <h1>Detail Page</h1>
        {/* <ProductCard/> */}
        <div className="">
            {/* <h3>product {id} clicked</h3> */}
            {/* <ProductCard product={bright}/> */}
            <DetailCard product={bright}/>
        </div>
    </div>
  )
}

export default DetailPage