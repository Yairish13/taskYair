import './Product.css';
import React, { memo } from 'react';
import Button from '../Button/Button';

function Product({ product, handleProduct, btnTxt }) {
    return (
        <div className='productCard'>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <Button mode="tertiary" onClick={() => handleProduct(product)}>
                {btnTxt}
            </Button>
        </div>
    );
}

export default memo(Product);
