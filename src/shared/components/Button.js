const Button = props => (
  <button className={props.success ? 'container success' : 'container'}>
    {props.children}

    <style jsx>{`
      .container {
        background-color: #c76b6b;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: .8em;
        padding: .8em 0;
        transition: all .2s ease;
        text-transform: uppercase;
        width: 110px;
      }

      .container:hover {
        background-color: #9b5555;
      }

      .container.success {
        background-color: #2ecc71;
      }
    `}</style>
  </button>
);

export default Button;
