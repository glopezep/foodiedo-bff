import OrderBox from './OrderBox';
import SecondaryHeader from '../../shared/components/SecondaryHeader';

const OrderDetail = props => (
  <div className="container">
    <SecondaryHeader>
      <span>Order(117)</span>
    </SecondaryHeader>
    <OrderBox url={props.url} />

    <style jsx>{`
      .container {
        flex: 1;
        margin: 0 .5em;
      }
    `}</style>
  </div>


);

export default OrderDetail;
