interface ProductCategoryRowProps {
  category: string;
}

const ProductCategoryRow: React.FC<ProductCategoryRowProps> = (props) => (
  <tr>
    <th colSpan={2}>{props.category}</th>
  </tr>
);

export default ProductCategoryRow;