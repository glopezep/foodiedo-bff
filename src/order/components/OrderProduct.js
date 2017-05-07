const OrderProduct = () => (
  <article className="container">
    <span>Orange Juice</span>
    <span>RD$120</span>
    <span>X</span>

    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        height: 40px;
        justify-content: space-between;
        padding: 0 1em;
      }

      .container:nth-child(odd) {
        background-color: #fff;
      }
    `}</style>
  </article>
);

export default OrderProduct;
