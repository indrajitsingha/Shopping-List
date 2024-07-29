import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Products from './componenets/Products';
import CartData from './componenets/CartData';

function App() {
  const [Value, setValue] = useState('');
  const [Items, setItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  // https://api.frontendeval.com/fake/food/fr
  const getData = async () => {
    if (Value.length > 1) {
      fetch(`https://api.frontendeval.com/fake/food/${Value}`)
        .then((val) => val.json())
        .then((val) => setItems(val));
    }
  };
  useEffect(() => {
    setTimeout(() => getData(), 2000);
  }, [Value]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Shopping List</h1>
      <input
        type="text"
        placeholder="Serach for Items"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="card">
        {Items?.map((val) => (
          <Products
            productName={val}
            sendItems={setCartItems}
            products={CartItems}
          />
        ))}
      </div>
      <h2> Cart 🛒</h2>
      <div className="card">
        {CartItems?.map((val) => (
          <CartData
            productName={val}
            sendItems={setItems}
            products={CartItems}
          />
        ))}
      </div>
    </>
  );
}

export default App;

{
  /* <button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p> */
}
