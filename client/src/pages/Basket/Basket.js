import React, { useState } from 'react';
import './Basket.css';
import { useBasketContext } from '../../hooks/basketContext';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/constants';
import Product from '../../components/Product/Product';
import Button from '../../components/Button/Button';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function Basket() {
  const navigate = useNavigate();
  const { isLoading, fetchData } = useFetch();

  const { selectedItems, removeFromBasket } = useBasketContext();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let postOrder = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, products: selectedItems }),
    }
    const res = await fetchData('http://localhost:3000/v1/orders', postOrder);
    console.log(res, 'res')
    if (!res.error) navigate('/finish')
  };

  return (
    <div>
      {selectedItems.length > 0 ?
        <Carousel responsive={responsive}>
          {selectedItems.map((product, index) => (
            <Product
              btnTxt='הסר מוצר'
              handleProduct={() => removeFromBasket(index)}
              product={product}
              index={index}
              key={index}
            />
          ))}
        </Carousel>
        :
        <div className='errDiv'>
          אין מוצרים אנא חזור על מנת להוסיף
        </div>
      }
      {selectedItems.length > 0 &&
        <form onSubmit={handleFormSubmit} className='formDiv'>
          <label>
            <input
              required
              type='text'
              name='fullName'
              value={formData.fullName}
              onChange={(e) => handleInputChange(e)}
            />
            :שם מלא
          </label>
          <br />
          <label>
            <input
              required
              type='text'
              name='address'
              value={formData.address}
              onChange={(e) => handleInputChange(e)}
            />
            :כתובת
          </label>
          <br />
          <label>
            <input
              required
              type='email'
              name='email'
              value={formData.email}
              onChange={(e) => handleInputChange(e)}
            />
            :אימייל
          </label>
          <br />
          <Button mode="primary" type='submit' loading={isLoading}>שלח הזמנה</Button>
        </form>
      }
    </div>
  );
}

export default Basket;
