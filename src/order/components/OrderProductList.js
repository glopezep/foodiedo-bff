import OrderProduct from './OrderProduct';

const OrderProductList = props => (
  <div>
    <OrderProduct url={props.url}/>
    <OrderProduct url={props.url}/>
    <OrderProduct url={props.url}/>
    <OrderProduct url={props.url}/>
    <OrderProduct url={props.url}/>
  </div>
);

export default OrderProductList;
