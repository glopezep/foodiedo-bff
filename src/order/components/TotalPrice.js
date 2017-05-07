const TotalPrice = () => (
  <article className="container">
    <span>Total</span>
    <span>RD$120</span>

    <style jsx>{`
      .container {
        align-items: center;
        background-color: #636f80;
        color: white;
        display: flex;
        height: 40px;
        justify-content: space-between;
        margin-bottom: 1em;
        padding: 0 1em;
        text-transform: uppercase;
      }
    `}</style>
  </article>
);

export default TotalPrice;
