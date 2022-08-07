import React from 'react'
import productsStyle from '../assets/styles/products.module.css'
import Product from './Product'

export default function Products({products}) {
  return (
    <section id={`${productsStyle.products}`} className="py-4">
        <div className="container">
            <div className={`text-center ${productsStyle.title}`}>
                {products.data.length > 0 && <h2 className="position-relative d-inline-block">New Collections</h2>}
            </div>
            <div className="products-list mt-4 row">
                {
                  products.data.length > 0
                  ?
                    products.data.map((product) => {
                      return <Product key={product.id} product={product} />
                    })
                  :
                    <h4 className="text-center text-danger">No Products are avaiable</h4>
                }
            </div>
        </div>
    </section>
  )
}
