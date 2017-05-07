import Button from '../../shared/components/Button'

const CurrentProduct = (props) => (
  <article className="container">
    <div className="image"></div>
    <footer className="footer">
      <div className="info">
        <span>Orage Juice</span>
        <span>RD$120</span>
      </div>
      <Button>Add</Button>
    </footer>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        margin-right: 1em;
        width: 360px;
      }

      .footer {
        align-items: center;
        background: #fff;
        display: flex;
        justify-content: space-between;
        height: 75px;
        padding: 0 1em;
      }

      .image {
        background: silver;
        flex: 1;
      }

      .info {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </article>
);

export default CurrentProduct;
