import React from 'react';
import './AllProducts.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../../utils/constants';
import Product from '../Product/Product';
import { useBasketContext } from '../../hooks/basketContext';

function AllProducts({ products }) {
    const { addToBasket } = useBasketContext();
    const handleAddProduct = (item) => {
        addToBasket(item)
    }
    return (
        <div>
            {products && Object.keys(products).map((el, index) => (
                <div className="allProducts"
                    key={index}>
                    <h3>{el}</h3>
                    <Carousel
                        responsive={responsive}
                    >
                        {products[el].map((product, index) => (
                            <Product
                                btnTxt='הוסף מוצר'
                                key={index}
                                handleProduct={handleAddProduct}
                                product={product}
                            />
                        ))}
                    </Carousel>
                </div>
            ))}
        </div>
    )
}

export default AllProducts