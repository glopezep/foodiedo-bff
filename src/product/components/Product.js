const Product = () => (
  <article className="container">
    <span>Orage Juice</span>
    <span>RD$120</span>

    <style jsx>{`
      .container {
        background-color: #636f80;
        color: #fff;;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-bottom: .5em;
        padding: .5em;
        width: 44%;
      }

      .container:nth-child(5), .container:nth-child(6) {
        margin-bottom: 0;
      }
    `}</style>
  </article>
);

export default Product;
