import React from 'react'
import productsStyle from '../assets/styles/products.module.css'

export default function Product({product}) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 p-2">
        <div className="bg-body shadow rounded pb-4">
            <div className={`position-relative ${productsStyle.productsImg}`}>
                <img src={`${product.image}`} className={`${productsStyle.cardImg}`} alt={product.name} />
                <span className="position-absolute text-white d-flex align-items-center justify-content-center fw-bold">{product.id}</span>
            </div>
            <div className="text-center">
                <div className={`mt-3 ${productsStyle.rating}`}>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                </div>
                <p className = "text-capitalize my-1 font-monospace">{product.name}</p>
                <span className = "fw-bold">$ {product.price}</span>
            </div>
        </div>
    </div>
  )
}
