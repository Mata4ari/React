import {Product} from "../ProductInterface";

interface ProductRowProps {
  product: Product;
}

const ProductRow: React.FC<ProductRowProps> = (props) => {
  const name:string|JSX.Element = props.product.stocked ? (
    props.product.name
  ) : (
    <span style={{ color: 'red' }}>{props.product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
