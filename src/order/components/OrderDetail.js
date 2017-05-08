import OrderBox from './OrderBox';
import SecondaryHeader from '../../shared/components/SecondaryHeader';

const OrderDetail = () => (
  <div className="container">
    <SecondaryHeader>
      <span>Order(117)</span>
    </SecondaryHeader>
    <OrderBox />

    <style jsx>{`
      .container {
        flex: 1;
        margin: 0 1em;
      }
    `}</style>
  </div>


);

export default OrderDetail;
