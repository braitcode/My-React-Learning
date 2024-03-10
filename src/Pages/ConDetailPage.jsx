import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../BD/CountriesDB'
import ConDetailCard from '../components/ConDetailCard'

const ConDetailPage = () => {
    // const {data} = useParams()
    // console.log(`Item ${data} clicked`);
    console.log(data);

    const bright = data.find((p) => p.id === parseInt(data));
  return (
    <div>
        <h1>Country Detail Page</h1>
        <div className="">
            <ConDetailCard countries={bright} />
        </div>
    </div>
  )
}

export default ConDetailPage