import Footer from '../../src/shared/components/Footer';
import Header from '../../src/shared/components/Header';
import Main from '../../src/shared/components/Main';
import SecondaryHeader from '../../src/shared/components/SecondaryHeader';
import Title from '../../src/shared/components/Title';
import OrderBox from '../../src/order/components/OrderBox';

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
      </section>
      <section className="mainRight">
        <OrderBox url={props.url} />
      </section>
    </Main>
    <Footer />


    <style>{`
      body,html,h1,h2,h3,h4,h5,h6,ul,li,p {
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: sans-serif;
        font-weight: normal;
      }

      .index {
        background: #f0eff0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        max-height: 100vh;
      }

      .mainLeft {
        flex: 1;
        flex-direction: column;
        padding: 1em;
        overflow: auto;
      }

      .mainRight {
        padding: 1em;
        width: 255px;
      }
    `}</style>
  </div>
);

export default Orders;
