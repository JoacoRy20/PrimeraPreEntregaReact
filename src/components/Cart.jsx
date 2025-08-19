import { useCart } from "../context/CartContext.jsx";
import CartItem from "./CartItem.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeItem, clearCart, getSubtotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div>
        <p>Carrito vacío</p>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onRemove={removeItem} />
      ))}
      <h3>Total: ${getSubtotal()}</h3>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => navigate('/checkout')}>Ir a pagar</button>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}
