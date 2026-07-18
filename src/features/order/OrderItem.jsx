import { formatCurrency } from '../../utils/helper';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPizza)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
