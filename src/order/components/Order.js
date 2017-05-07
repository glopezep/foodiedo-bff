import Link from 'next/link'
import OrderProductList from './OrderProductList';
import TotalPrice from './TotalPrice';
import Button from '../../shared/components/Button';

const Order = () => (
  <div>
    <OrderProductList />
    <TotalPrice />
    <Link href="/secondstep">
      <a>
        <Button>Order now</Button>
      </a>
    </Link>
  </div>
);

export default Order;
