import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <>
      <div className="container d-flex col   g-2">
        {products.slice(0, 4).map((product, i) => (
          <Card item={product} key={i} />
        ))}
        <Link to="/productspage"><button className='btn btn-success'>Explore more</button></Link>
      </div>

    </>
  )
}

export default Homepage
