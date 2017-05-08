import Link from 'next/link'
import OrderProductList from './OrderProductList';
import TotalPrice from './TotalPrice';
import Button from '../../shared/components/Button';

const OrderBox = props => (
  <div>
    <OrderProductList />
    <TotalPrice />
    {props.url.pathname === '/' && (
      <Link href="/secondstep">
        <a><Button>Order now</Button></a>
      </Link>
    )}
    {props.url.pathname === '/secondstep' && <Button>Pay now</Button>}
  </div>
);

export default OrderBox;
