import Button from '../../shared/components/Button';

const Order = () => (
  <article className="container">
    <div className="info">
      <span>Order (117)</span>
      <span>Pending</span>
    </div>
    <div className="actions">
      <Button>Cancel</Button>
      <Button success="true">Complete</Button>
    </div>

    <style jsx>{`
      .actions {
        display: flex;
        justify-content: space-between;
        width: 230px;
      }

      .container {
        align-items: center;
        background-color: #fff;;
        display: flex;
        height: 50px;
        justify-content: space-between;
        margin-bottom: 1em;
        padding: 0 1em;
      }

      .info {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 140px;
      }
    `}</style>
  </article>
);

export default Order;
