import React from 'react';
import ProductCard from "../components/ProductCard";
import { data } from '../BD/ProductBD';



const Products = () => {
    return (
      <div>
        {/* <Navs/> */}
        <h1>Product Page</h1>
        <div className="d-flex justify-content-between flex-wrap gap-3">
          {data.map((p) => {
            return (
              <div className="" key={p.id}>
                <ProductCard product={p} />
              </div>
            );
          })}
        </div>
      </div>
    );

  };
  

export default Products;