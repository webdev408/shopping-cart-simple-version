import { useState } from 'react';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    { id: '1', name: 'Mens cotton t-shirt', price: '$11.99', image: 'https://m.media-amazon.com/images/I/71kM3J7wfHL._AC_UX679_.jpg' },
    { id: '2', name: 'Slim fit plaid mens shirt', price: '$35.99', image: 'https://m.media-amazon.com/images/I/91lm3Jk6scL.AC_UX679_.jpg' },
    { id: '3', name: 'Comfort cushion crew socks', price: '$21.99', image: 'https://m.media-amazon.com/images/I/81w8yRvy--L._AC_UX679_.jpg' },
    { id: '4', name: 'cartoon multistyle cycling cap', price: '$22.84', image: "https://m.media-amazon.com/images/I/71ntoUB8JUS._AC_UX679_.jpg" },
    { id: '5', name: 'Mens A-Shirt pack of 6', price: '$26.39', image: "https://m.media-amazon.com/images/I/81bVePFUyzL._AC_UX679_.jpg" },
    { id: '6', name: 'colgate sensitive toothpaste', price: '$6.34', image: "https://m.media-amazon.com/images/I/81emDy+FweL._AC_SY110_.jpg" },

  ]);

  const addToCart = (product) => {    
    setCart([...cart, { ...product }]);
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderProducts = () => (
    <>      
      <h1>Hat and Sock store Products </h1>
        <div className='products'>
        {products.map((product)=>(
        <div className='product' key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <h4>{product.price}</h4>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        ))}       
      </div>
    </>
  )
  const renderCart = () => (
    <>
      <h1>Cart </h1>
      <div className='products'>
        {cart.map((product) => (
          <div className='product' key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h4>{product.price}</h4>
            <button onClick={() =>removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );  
  return (
    <div className="App">
      <header>
        <button onClick={()=>navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
        <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
