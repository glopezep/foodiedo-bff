import Footer from '../src/shared/components/Footer';
import Header from '../src/shared/components/Header';
import Main from '../src/shared/components/Main';
import SecondaryHeader from '../src/shared/components/SecondaryHeader';
import OrderDetailList from '../src/order/components/OrderDetailList';

const Payments = (props) => (
  <div className="index">
    <Header>
      <p>Header text</p>
    </Header>
    <Main>
      <section className="mainLeft">
        <SecondaryHeader />
        <OrderDetailList url={props.url} />
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

export default Payments;
