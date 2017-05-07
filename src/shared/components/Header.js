const Header = props => (
  <header className="header">
    {props.children}

    <style jsx>{`
      .header {
        align-items: center;
        background: #636f80;
        color: #fff;
        display: flex;
        height: 50px;
        justify-content: space-between;
        padding: 0 1em;
      }
    `}</style>
  </header>
);

export default Header;
