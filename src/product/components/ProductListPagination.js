import Button from '../../shared/components/Button';

const ProductListPagination = () => (
  <footer className="container">
    <Button>Back</Button>
    <Button>Next</Button>
    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        height: 75px;
        justify-content: space-between;
      }
    `}</style>
  </footer>
);

export default ProductListPagination;
