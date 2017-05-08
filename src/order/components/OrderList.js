import Order from './Order';

const OrderList = props => (
  <div className="container">
    <Order url={props.url}/>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </div>
);

export default OrderList;
