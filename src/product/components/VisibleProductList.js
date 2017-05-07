import ProductList from './ProductList';
import ProductListPagination from './ProductListPagination';

const VisibleProductList = () => (
  <div className="container">
    <ProductList />
    <ProductListPagination />
    <style jsx>{`
      .container {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
    `}</style>
  </div>


);

export default VisibleProductList;
