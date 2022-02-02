import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/cart/actions";
import { FaCartPlus } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import "./styles.css";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;

  return (
    <div>
      <div className="titleImagesAndPrice">
        <h3 className="title">{name}</h3>
        <h3 className="price">R$ {price}</h3>
        <img src={image} className="image" alt="Imagem do produto" />

        {isRemovable ? (
          <button onClick={() => dispatch(removeFromCart(id))}>
            REMOVER DO CARRINHO <MdRemoveShoppingCart size={20} />
          </button>
        ) : (
          <button onClick={() => dispatch(addToCart(product))}>
            ADICIONAR AO CARRINHO
            <FaCartPlus size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
