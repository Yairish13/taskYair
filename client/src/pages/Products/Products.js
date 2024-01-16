import React, { useEffect, useState } from 'react';
import './Products.css'
import { useFetch } from '../../hooks/useFetch';
import AllProducts from '../../components/AllProducts/AllProducts';

function Products() {
    const { fetchData } = useFetch();
    const [products, setProducts] = useState(null);
    const [err, setErr] = useState(false);
    const handleGetProducts = async () => {
        const response = await fetchData('http://localhost:3000/v1/products');
        if (!response) setErr(true)
        console.log(response, 'resposne');
        setProducts(response)
    }

    useEffect(() => {
        handleGetProducts()
    }, [])
    return (
        <div>
            {products ? <AllProducts products={products} /> : err ? <div className='note'>קרתה תקלה אנא נסו שנית מאוחר יותר</div> : <div className='note'>טוען...</div>}
        </div>
    )
}

export default Products