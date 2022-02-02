import { useSelector } from "react-redux";
import Product from "../Product";
import "./styles.css";
import { useState, useEffect } from "react";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  //useState para atualizar o total
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    totalPrice();
  }, [cart]);

  //reduce para saber o total
  const totalPrice = () => {
    const total = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    setCartTotal(total);
  };

  return (
    <div className="cartSession">
      <h2>Meu carrinho</h2>
      <h2>Total: {cartTotal}</h2>

      <div className="allInTheCart">
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable />
        ))}
      </div>
    </div>
  );
};

export default Cart;
