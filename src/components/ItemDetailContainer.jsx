import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { CartContext } from "../context/CartContext";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error al traer producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <h2 className="text-center mt-5">Cargando detalle...</h2>;
  if (!product) return <h2 className="text-center mt-5">Producto no encontrado</h2>;

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={product.imagen} alt={product.nombre} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2>{product.nombre}</h2>
          <p className="text-muted">Categoría: {product.categoria}</p>
          <h3 className="text-primary">${product.precio}</h3>
          <button
            className="btn btn-dark mt-3"
            onClick={() => addToCart(product, 1)}
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
