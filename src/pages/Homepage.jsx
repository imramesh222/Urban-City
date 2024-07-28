import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("../products.json")
      // .then((res) => {
      //   if (Array.isArray(res.data.products)) {
      //     setProducts(res.data.products)
      //   } else {
      //     console.error("Expected an array in the response, but got:", res.data)
      //   }
      // })
      .then(res => setProducts(res.data.products))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="d-flex flex-column ">
        <h1 className='text-center'>Top Fashions</h1>
        <div className="container d-flex  flex-wrap  ">
          {products.slice(0, 5).map((product, i) => (
            <Card item={product} key={i} />
          ))}
        </div>
        <div className="d-flex justify-content-center my-2">
          <Link to="/productspage"><button className='btn btn-success'>Explore more</button></Link>
        </div>
      </div>
    </>
  )
}

export default Homepage
