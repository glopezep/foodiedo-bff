import OrderProductList from './OrderProductList';
import TotalPrice from './TotalPrice';
import Button from '../../shared/components/Button';

const Order = () => (
  <div>
    <OrderProductList />
    <TotalPrice />
    <Button>Order now</Button>
  </div>
);

export default Order;
