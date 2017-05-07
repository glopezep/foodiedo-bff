import Product from './Product';

const ProductList = () => (
  <div className="container">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />

    <style jsx>{`
      .container {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}</style>
  </div>
);

export default ProductList;
