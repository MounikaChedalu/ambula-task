import React from 'react';
import './Shopping.css';
import { useState } from 'react';

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      id: 2,
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70',
      name: 'One Plus nord',
      category: 'Mobiles',
      seller: 'Nord',
      price: 20000
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div className="shopping-container">
        <header>
        <button className='hideshow' onClick={() => handleShow(!showCart)}>
          {showCart ? 'Hide Cart' : 'Show Cart'} ({cart.length})
        </button>
        </header>

      {showCart ? (
        <div>
          <h2>Cart Items:</h2>
          {cart.length > 0 ? (
            <ul className="product-list">
              {cart.map((item) => (
                <li key={item.id} className="product-item">
                  <img src={item.url} alt={item.name} />
        <div>
                    <h3>{item.name}</h3>
                    <p>Category: {item.category}</p>
                    <p>Seller: {item.seller}</p>
                    <p>Price: {item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove from Cart
                    </button>
      </div>
          </li>
        ))}
      </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
    </div>
      ) : (
        <div>
          <h2>Product List:</h2>
          {product.length > 0 ? (
            <ul className="product-list">
              {product.map((item) => (
                <li key={item.id} className="product-item">
                  <img src={item.url} alt={item.name} />
    <div>
                    <h3>{item.name}</h3>
                    <p>Category: {item.category}</p>
                    <p>Seller: {item.seller}</p>
                    <p>Price: {item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
          </li>
        ))}
      </ul>
          ) : (
            <p>No products available.</p>
          )}
    </div>
      )}
    </div>
  );
}

export default App;
