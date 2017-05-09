import Button from '../../shared/components/Button'

const CreateCategoryForm = () => (
  <form className="container">
    <header className="header">
      <h3>Add new category</h3>
    </header>
    <div className="group">
      <input className="input" type="text" placeholder="Category Name"/>
      <Button>Add</Button>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
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
        height: 30px;
        margin-bottom: 1em;
        padding: 0 1em;
      }
    `}</style>
  </form>
);

export default CreateCategoryForm;
