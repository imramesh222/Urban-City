import axios from 'axios'
import React, { useState } from 'react'
import Card from '../components/Card'

const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(12)

  useState(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  })

  return (
    <>
      <div className="d-flex">
        <div className="container d-flex col   g-2 flex-wrap">
          {products.slice(0, limit).map((product, i) => (
            <Card item={product} key={i} />
          ))}
        </div>
      </div>




    </>
  )
}

export default ProductPage
