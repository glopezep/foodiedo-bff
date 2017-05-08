const FilterForm = props => (
  <form className="container">
    <input className="input" type="text" placeholder="Search a product here..."/>
    <select className="select">
      <option>Default</option>
      <option>Other</option>
      <option>Option</option>
    </select>

    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .input {
        background-color: #dfdfe0;
        border: none;
        color: gray;
        height: 28px;
        padding: 0 1em;
        width:: 160px;
      }

      .select {
        background-color: #c76b6b;
        border: none;
        color: white;
        height: 30px;
        margin-left: 1em;
        text-transform: uppercase;
        width: 110px;
      }
    `}</style>
  </form>
);

export default FilterForm;
