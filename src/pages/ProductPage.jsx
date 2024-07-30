import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(12)

  useEffect(() => {
    axios
      .get("../products.json")
      .then(res => setProducts(res.data.products))
      .catch((err) => console.log(err))
  }, [])
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
