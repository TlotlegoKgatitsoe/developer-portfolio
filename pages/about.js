// Import and use the layout file
import Layout from '../components/MyLayout'

// Export all the things that are about me
export default () => (
  <Layout>
    <h2> About Me </h2>
    <hr />
    <h3> Educational history </h3>
    <p> Finished Grade 12 </p>
    <h3> Work history </h3>
    <p> None, just learning programming. </p>
    <h3> What I am passionate about? </h3>
    <ul>
      <li> Programming </li>
      <li> Racing go-karts and motorcycles </li>
      <li> Reading self-development books </li>
    </ul>
  </Layout>
);