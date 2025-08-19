export default function CartItem({ item, onRemove }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid #eee", padding: 8 }}>
      <div style={{ flex: 1 }}>
        <strong>{item.name}</strong>
        <p>${item.price} x {item.qty}</p>
      </div>
      <div>
        <p>Subtotal: ${item.qty * item.price}</p>
        <button onClick={() => onRemove(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}
