const SecondaryHeader = props => (
  <header>
    {props.children}

    <style jsx>{`
      header {
        align-items: center;
        background: #fff;
        display: flex;
        height: 50px;
        justify-content: space-between;
        margin-bottom: 1em;
        padding: 0 1em;
      }
    `}</style>
  </header>
);

export default SecondaryHeader;
