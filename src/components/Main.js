import React, { useEffect, useState } from 'react'
import axios from 'axios'
import productsStyle from '../assets/styles/products.module.css'
import Navbar from './Navbar'
import Products from './Products'
import Pagination from "react-js-pagination";

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchKey, setsearchKey] = useState('');

  const getProductByAxios = (pageNumber = 1, key = searchKey) => {
    document.title = "Product Collections";

    if(key.length !== 0 ) {
      document.title = "Product Searching..";
      setLoading(true);
      axios.get(`search-products/${key}?page=${pageNumber}`).then((res) => {
        if(res.data.status === 200) {
          setProducts(res.data.products);
        }
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    } else {
      axios.get(`get-products?page=${pageNumber}`).then((res) => {
        if(res.data.status === 200) {
          setProducts(res.data.products);
        }
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  useEffect(() => {
    getProductByAxios();
  }, []);

  const searchProducts = (key) => {
    setsearchKey(key);
    getProductByAxios(1, key);
  }
  
  return (
    <>
      <header>
        <Navbar render={(value) => searchProducts(value)}/>
      </header>
      <main>
        <>
          {
            loading
            ?
              <div className="text-center container p-4" id={`${productsStyle.products}`}>
                  <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            :
              <>
                <Products products={products}/>
                <div className='d-flex justify-content-center mb-4'>
                  {
                    products.data.length > 0 &&
                    <Pagination
                      activePage={products.current_page}
                      totalItemsCount={products.total}
                      itemsCountPerPage={products.per_page}
                      onChange={(pageNumber, searchValue) => getProductByAxios(pageNumber, searchValue)}
                      itemClass='page-item'
                      linkClass='page-link'
                      firstPageText='First'
                      lastPageText='Last'
                    />
                  }
                </div>
              </>
          }
        </>
      </main>
    </>
  )
}
