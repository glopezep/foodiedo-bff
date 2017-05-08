import Footer from '../src/shared/components/Footer';
import Header from '../src/shared/components/Header';
import Main from '../src/shared/components/Main';
import Advertising from '../src/shared/components/Advertising';
import SecondaryHeader from '../src/shared/components/SecondaryHeader';
import OrderBox from '../src/order/components/OrderBox';
import OrderList from '../src/order/components/OrderList';

const Payments = () => (
  <div className="index">
    <Header>
      <p>Header text</p>
    </Header>
    <Main>
      <section className="mainLeft">
        <SecondaryHeader />
        <div className="u-container">
          <div className="u-max-width">
            <SecondaryHeader>
              <span>Order (117)</span>
            </SecondaryHeader>
            <OrderBox />
          </div>
          <div className="u-max-width">
            <SecondaryHeader>
              <span>Order (117)</span>
            </SecondaryHeader>
            <OrderBox />
          </div>
          <div className="u-max-width">
            <SecondaryHeader>
              <span>Order (117)</span>
            </SecondaryHeader>
            <OrderBox />
          </div>
          <div className="u-max-width">
            <SecondaryHeader>
              <span>Order (117)</span>
            </SecondaryHeader>
            <OrderBox />
          </div>
        </div>
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

      .u-container {
        display: flex;
        justify-content: space-between;
      }

      .u-max-width {
        flex: 1;
        margin: 0 1em;
      }
    `}</style>
  </div>
);

export default Payments;
