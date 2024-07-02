import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { add } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    getProductData()
  }, [])

  const getProductData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setProduct(data)
  }

  const handleAdd = (product) => {
    dispatch(add(product))
  }


  return (
    <div>
      <h2>Product</h2>
      <div className='row'>
        <div className='col-md-6'>
          <img src={product.image} />
        </div>
        <div className='col-md-6'>
          <h3>{product.title}</h3>
          <h3>{product.category}</h3>
          <span className='bg-info p-2'>Price: {product.price}</span>
          <p className='mt-4'>{product.description}</p>
          <div>
            <button className='btn btn-warning'
            onClick={()=> {handleAdd(product)}}
            >Add to Cart</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product