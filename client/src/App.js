import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Products from './pages/Products/Products';
import Basket from './pages/Basket/Basket';
import Layout from './components/Layout/Layout';
import { BasketProvider } from './hooks/basketContext';
import Finish from './pages/Finish/Finish';

function App() {
  const navigate = useNavigate();
  const handleNavigateToBasket = () => {
    navigate('/basket');
  }
  const handleNavigateToProducts = () => {
    navigate('/');

  }
  return (
    <BasketProvider>
      <Routes>
        <Route path="/" element={
          <Layout
            headerText="רשימת מוצרים"
            buttonText="המשך לרכישה"
            handleClick={handleNavigateToBasket}
          >
            <Products />
          </Layout>
        } />
        <Route path="/basket" element={
          <Layout
            headerText="סל קניות"
            buttonText="חזור למוצרים"
            handleClick={handleNavigateToProducts}
          >
            <Basket />
          </Layout>
        } />
        <Route path="/finish" element={
          <Layout
            headerText="הזמנה בוצעה"
            buttonText="רכוש מחדש"
            handleClick={handleNavigateToProducts}
          >
            <Finish />
          </Layout>
        } />
      </Routes>
    </BasketProvider>

  );
}

export default App;
