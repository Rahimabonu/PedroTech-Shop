import React from 'react'
import Product from './product'

const Shop = () => {
    
    const products = [
        {
            id:1,
            imgURL: "https://abbos-frontend.vercel.app/static/media/1.87f6c2f48f7e15ed845b.png",
            name: "IPhone",
            narx: "$999",
        },
        {
            id:2,
            imgURL: "https://abbos-frontend.vercel.app/static/media/2.5f080d9e47bf46ca3fce.png",
            name: "Macbook Pro 2022 (M1)",
            narx: "$1999",
        },
        {
            id:3,
            imgURL: "https://abbos-frontend.vercel.app/static/media/3.c7785c796d0b2bf5aa2b.png",
            name: "Cannon M50 Camera",
            narx: "$699",
        },
        {
            id:4,
            imgURL: "https://abbos-frontend.vercel.app/static/media/4.dce93278370eb9a94e56.png",
            name: "WLS Van Gogh Denim Jacket",
            narx: "$228",
        },
        {
            id:5,
            imgURL: "https://abbos-frontend.vercel.app/static/media/5.a13c8fc38072a14d6633.png",
            name: "LED Light Strips",
            narx: "$19.99",
        },
        {
            id:6,
            imgURL: "https://abbos-frontend.vercel.app/static/media/6.5828a0fe3c77468b8726.webp",
            name: "SPECTRUM LS TEE",
            narx: "$68",
        },
        {
            id:7,
            imgURL: "https://abbos-frontend.vercel.app/static/media/7.59c9a0eba54726d9fc95.webp",
            name: "AUTO SERVICE SHIRT by GOLF WANG",
            narx: "$120",
        },
        {
            id:8,
            imgURL: "https://abbos-frontend.vercel.app/static/media/8.8bd0ab9ccc0cf9fb335d.webp",
            name: "DON'T TRIP UNSTRUCTURED HAT",
            narx: "$40",
        }
    ]

  return (
    <>
        <h1 className='shop-title'>PedroTech Shop</h1>
    <div className='shop-container'>
        <div className="cart-container">
            <img className='product-img' src="#" alt="" />
          {
            products.map( p => {
                return(
                    <Product
                        imgURL={p.imgURL}
                        id={p.id}
                        name={p.name}
                        narx = {p.narx}
                        key={p.id}
                    />
                )
            })
          }
        </div>
    </div>
    </>
)
}

export default Shop