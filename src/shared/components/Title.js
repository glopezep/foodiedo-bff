const Title = props => (
  <h2 className="title">
    {props.children}

    <style jsx>{`
      .title {
        font-weight: normal;
      }
    `}</style>
  </h2>
);

export default Title
