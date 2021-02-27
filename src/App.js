import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Navbar/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Navbar/ProductList/ProductList';
import data from './data';

function App() {
  const [keyword, setKeyword] = useState('');
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([...data]);
 

  useEffect( () => {
          const result = data.filter( product => product.title.includes(keyword) ||product.brand.includes(keyword) );
          setProducts(result)
  }, [keyword])
  
  const cartHandlr = (id) => {
    const cartAdd = products.find( product => product.id === id);
    setCarts([...carts, cartAdd])
  }

  const removeItem = (id) => {
   setCarts( items => items.filter( item => item.id !== id))
  }
  return (
    <div className="App">
     <Navbar setKeyword ={setKeyword} />
     <ProductList products = {products} cartHandlr = {cartHandlr}/>
     <Cart cartItems = {carts} removeItem = {removeItem} />
    </div>
  );
}

export default App;
