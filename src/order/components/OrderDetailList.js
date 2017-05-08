import OrderDetail from './OrderDetail';

const OrderDetailList = props => (
  <div className="container">
    <OrderDetail url={props.url}/>
    <OrderDetail url={props.url}/>
    <OrderDetail url={props.url}/>
    <OrderDetail url={props.url}/>

    <style jsx>{`
      .container {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default OrderDetailList;
