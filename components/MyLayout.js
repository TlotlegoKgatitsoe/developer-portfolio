import Head from 'next/head';
import Header from './Header';

// Styling to the layout
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

// Create the layout that will be exported
const Layout = ( props ) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <div style={ layoutStyle }>
      <Header />
      { props.children }
    </div>
    <hr />
  </div>
);

// Export the layout to be able to import and use it in another file
export default Layout