import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import {Product} from "../ProductInterface";

interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

const ProductTable: React.FC<ProductTableProps> = (props) => {
  const rows:JSX.Element[] = [];
  let lastCategory: string | null = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(props.filterText) === -1) {
      return;
    }
    if (props.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;