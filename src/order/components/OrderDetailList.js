import OrderDetail from './OrderDetail';

const OrderDetailList = () => (
  <div className="container">
    <OrderDetail />
    <OrderDetail />
    <OrderDetail />
    <OrderDetail />

    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default OrderDetailList;
