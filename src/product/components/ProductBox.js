import CurrentProduct from './CurrentProduct';
import VisibleProductList from './VisibleProductList';

const ProductBox = (props) => (
  <div className="container">
    <CurrentProduct />
    <VisibleProductList />

    <style jsx>{`
      .container {
        display: flex;
        flex: 1;
      }
    `}</style>
  </div>


);

export default ProductBox;
