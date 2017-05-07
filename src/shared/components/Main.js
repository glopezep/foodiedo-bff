import SecondaryHeader from './SecondaryHeader'

const Main = props => (
  <main>
    {props.children}
    <style jsx>{`
      main {
        background: #f0eff0;
        display: flex;
        flex: 1;
      }
    `}</style>
  </main>
  );

  export default Main;
