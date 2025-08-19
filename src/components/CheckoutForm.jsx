import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const { cartItems, getSubtotal, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setBuyer(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const ordersRef = collection(db, "orders");
      const order = {
        buyer,
        items: cartItems.map(({ id, name, price, qty }) => ({ id, name, price, qty })),
        total: getSubtotal(),
        createdAt: serverTimestamp()
      };
      const docRef = await addDoc(ordersRef, order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Error al generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>Compra confirmada</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" value={buyer.phone} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={buyer.email} onChange={handleChange} required />
      <button type="submit" disabled={loading}>
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
}
