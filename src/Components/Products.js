import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products.data)
    console.log(products)

    useEffect(() => {
        // getProductsData()
        dispatch(fetchProducts())
    }, [])

    // const getProductsData = async () => {
    //     const { data } = await axios.get('https://fakestoreapi.com/products')
    //     setProducts(data)
    // }


    return (
        <div>
            <h2>Products</h2>
            <div className='container'>
                <div className='row'>
                    {
                        products && products.length > 0 ? (
                            products.map((item, index) => (
                                <div className='col-md-3 mt-4'>
                                    <div className='card p-2'>
                                        <Link to={`/product/${item.id}`}>
                                            <img src={item.image} alt={item.title}
                                                style={{ height: "250px", width: '200px' }}
                                            />
                                            <h5>{item.title}</h5>
                                            <h6>{item.price}</h6>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : <p>Loading...</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products