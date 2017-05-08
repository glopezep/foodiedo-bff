import Footer from '../src/shared/components/Footer';
import Header from '../src/shared/components/Header';
import Main from '../src/shared/components/Main';
import Advertising from '../src/shared/components/Advertising';
import SecondaryHeader from '../src/shared/components/SecondaryHeader';
import Title from '../src/shared/components/Title';
import OrderBox from '../src/order/components/OrderBox';
import OrderList from '../src/order/components/OrderList';

const Orders = props => (
  <div className="index">
    <Header>
      <p>Header text</p>
    </Header>
    <Main>
      <section className="mainLeft">
        <SecondaryHeader>
          <Title>Order List</Title>
        </SecondaryHeader>
        <OrderList url={props.url}/>
      </section>
      <section className="mainRight">
        <SecondaryHeader>
          <Title>Order Products</Title>
        </SecondaryHeader>
        <OrderBox url={props.url}/>
      </section>
    </Main>
    <Footer />


    <style>{`
      body,html,h1,h2,h3,h4,h5,h6,ul,li,p {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .index {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .mainLeft {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding: 1em;
      }

      .mainRight {
        padding: 1em;
        width: 255px;
      }
    `}</style>
  </div>
);

export default Orders;
