import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: Math.max(pizza.count - 1, 0) }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de compras</h2>
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <p>${pizza.price.toLocaleString()}</p>
              <p>Cantidad: {pizza.count}</p>
              <button onClick={() => increaseQuantity(pizza.id)}>➕</button>
              <button onClick={() => decreaseQuantity(pizza.id)}>➖</button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay pizzas en el carrito 🍕</p>
      )}
      {cart.length > 0 && (
        <>
          <h3 className="total">Total: ${total.toLocaleString()}</h3>
          <button className="pay-button">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
