import React from 'react'

const CardCoupon = (props: {item:any}) => {
    const { item } = props
    return (
        <div className='card-coupon'>
            <div className='card-body'>
                <h5>{item.value}</h5>
                <p>{item.description}</p>
            </div>
        </div>
  )
}

export default CardCoupon
