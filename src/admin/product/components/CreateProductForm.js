import Button from '../../../shared/components/Button'

const CreateProductForm = () => (
  <form className="container">
    <header className="header">
      <h3>Add new product</h3>
    </header>
    <div className="group">
      <input className="input" type="text" placeholder="Name"/>
      <input className="input" type="text" placeholder="Price"/>
      <select className="select">
        <option>Category</option>
      </select>
      <label className="file" for="file">File
        <input className="file" type="file" id="file" style={{ display: 'none' }}/>
      </label>
      <Button>Add</Button>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
      }

      .file {
        align-items: center;
        background-color: #c76b6b;
        color: #fff;
        display: flex;
        font-size: .8em;
        height: 30px;
        justify-content: center;
        margin-bottom: 1em;
        padding: 0 1em;
        text-transform: uppercase;
      }

      .group {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 1em;
      }

      .header {
        align-items: center;
        background-color: #e4e5e6;
        color: #8e8f8e;
        display: flex;
        height: 70px;
        padding: 0 1em;
      }

      .input {
        align-items: center;
        border: 1px solid silver;
        display: flex;
        height: 30px;
        justify-content: center;
        margin-bottom: 1em;
        padding: 0 1em;
      }

      .select {
        height: 34px;
        margin-bottom: 1em;
        text-transform: uppercase;
      }
    `}</style>
  </form>
);

export default CreateProductForm;
