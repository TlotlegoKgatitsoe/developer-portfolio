// Import and use the layout file
import Layout from '../components/MyLayout'

// Export all the tags for the projects
export default () => (
  <Layout>
    <h2> Projects </h2>
    <hr />
    <p> I do not have a lot of projects, that ones that are there are not pushed to GitHub. The biggest one I have is: </p>
    <ul> 
      <li>
        <a href='http://tk-itunes-app.herokuapp.com/'> Itunes App </a> made with React and Express and Node.js. 
        It's GitHub code is <a href='https://github.com/TlotlegoKgatitsoe/Itunes-app-with-React-and-Express'> here. </a>
      </li>
    </ul>
  </Layout>
);