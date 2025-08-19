import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      🛒
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;
