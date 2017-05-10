// import Button from '../../../shared/components/Button'
import ProductForm from './ProductForm';

const Product = props => (
  <article className="container">
    <div className="image" />
    <footer className="footer">
      <ProductForm />
    </footer>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
      }

      .footer {
        background: white;
        padding: 1em;
      }

      .image {
        background: silver;
        height: 300px;
      }
    `}</style>
  </article>
);

export default Product;
