import { FaPlus } from "react-icons/fa";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};  

const server = "jisha";

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductProps) => {
  <div className="product-card">
      <img src={`${server}/${photo}`} alt={name}/>
      <p>{name}</p>
      <span>{price}</span>

      <div onClick={() => handler()}>
        <FaPlus/>
      </div>
  </div>
};

export default ProductCard;
