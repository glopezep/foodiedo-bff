const Footer = props => (
  <footer>
    {props.children}

    <style jsx>{`
      footer {
        background: #636f80;
        height: 50px;
      }
    `}</style>
  </footer>
);

export default Footer;
