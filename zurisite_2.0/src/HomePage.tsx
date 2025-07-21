
import Layout from './components/Layout';
import Draggable from './components/Draggable';
import NavBar from './components/NavBar';


function HomePage(){
  return (
    <div>
      <Layout>
        <NavBar></NavBar>
        <p>new site tell them ppls</p>
        <Draggable/>

      </Layout>
    </div>
  )
}



export default HomePage;
