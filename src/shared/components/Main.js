import SecondaryHeader from './SecondaryHeader'

const Main = props => (
  <main>
    {props.children}
    <style jsx>{`
      main {
        background: #f0eff0;
        display: flex;
        flex: 1;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
      }
    `}</style>
  </main>
  );

  export default Main;
