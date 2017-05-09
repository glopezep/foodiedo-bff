import Product from './Product'

const ProductList = () => (
  <div>
    <Product />
    <Product />

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        overflow: scroll;
      }
    `}</style>
  </div>
);

export default ProductList;
