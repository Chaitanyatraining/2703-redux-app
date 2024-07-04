import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/CartSlice'

const Cart = () => {
  const cartData = useSelector(state => state.cart)
  console.log(cartData)

  const dispatch = useDispatch()

  const handleRemove = (id) => {
      dispatch(remove(id))
  }

  return (
    <div>
      <h2>cartPage</h2>
        {
          cartData && cartData.length > 0 ? (<div>
            {cartData.map((item) => (
              <div className='row'>
                <div className='col-md-4'>
                  <img src={item.image} style={{height:"300px"}} />
                </div>
                <div className='col-md-4'>
                  <h3>{item.title}</h3>
                  <h5>{item.category}</h5>
                  <p>{item.description}</p>
                </div>
                <div className='col-md-4'>
                  <h4>Price: ${item.price}</h4>
                  <button className='btn btn-danger'
                  onClick={() => {handleRemove(item.id)}}
                  >Remove</button>
                </div>
              </div>
            ))}

          </div>) : (<div>

          </div>)
        }
      </div>
  )
}

export default Cart