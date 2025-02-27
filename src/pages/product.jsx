import React from 'react'

const Product = ({imgURL,name,narx,id}) => {
  return (
    <>
        <div className="product">
            <img className='product-img' src={imgURL} alt="" />
            <div className="product-name">{name}</div>
            <div className="product-narx">{narx}</div>
        </div>
    </>
)
}

export default Product