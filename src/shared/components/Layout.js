import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Layout = props => (
  <div>
    <Header />
    <Main leftContent={props.leftContent}>
    </Main>
    <Footer />

    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
    `}</style>
  </div>
);

export default Layout;
