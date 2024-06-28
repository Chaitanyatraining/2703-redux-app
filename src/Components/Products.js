import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsData()
    }, [])

    const getProductsData = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products/{id}')
        setProducts(data)
    }


    return (
        <div>
            <h2>Products</h2>
            {
                products && products.length > 0 ? (
                    <div className='row'>
                        {products.map((product) => (
                            <div className='col-md-4' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <div className='card P-4'>
                                        <img src={product.image} alt={product.title} />
                                        <h4>{product.title}</h4>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (<p>No data found</p>)
            }
        </div>
    )
}

export default Products