import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import AllProducts from '../../components/AllProducts/AllProducts';
import Loader from '../../components/Loader/Loader';

function Products() {
    const { fetchData } = useFetch();
    const [products, setProducts] = useState(null);
    const handleGetProducts = async () => {
        const response = await fetchData('http://localhost:3000/v1/products');
        setProducts(response)
    }

    useEffect(() => {
        handleGetProducts()
    }, [])
    return (
        <div>
            {products ? <AllProducts products={products} /> : <Loader />}
        </div>
    )
}

export default Products