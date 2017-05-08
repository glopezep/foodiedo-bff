import Order from './Order';

const OrderList = () => (
  <div className="container">
    <Order />
    <Order />
    <Order />
    <Order />
    <Order />
    <Order />

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
);

export default OrderList;
