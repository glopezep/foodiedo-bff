const ProductForm = props => (
  <form className="container">
    <div className="group">
      <span className="label">Name:</span>
      <input className="input" type="text" value="Orange Juice" disabled/>
    </div>
    <div className="group">
      <span className="label">Price:</span>
      <input className="input" type="text" value="RD$120" disabled/>
    </div>
    <div className="group">
      <span className="label">Category:</span>
      <select className="select" disabled>
        <option>Drinks</option>
      </select>
    </div>

    <style jsx>{`
      .container {
        display: flex;
      }

      .group {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-right: .5em;
      }

      .group:last-child {
        margin-right: 0;
      }

      .input {
        height: 30px;
        padding: 0 1em;
      }

      .label {
        margin-bottom: .3em;
      }

      .select {
        background-color: #c76b6b;
        border: none;
        color: #fff;
        height: 34px;
        text-transform: uppercase;
      }

    `}</style>
  </form>
);

export default ProductForm;
