
import Layout from './components/Layout';
import Draggable from './components/Draggable';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Landing} from './pages/Landing';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Projects} from './pages/Projects';
import {Blog} from './pages/Blog';
import {Art} from './pages/Art';
import {Random} from './pages/Random';

function HomePage(): JSX.Element {
  return (
    <div>
      <Layout>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/.landing" element={<Landing/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/art" element={<Art/>} />
            <Route path="/random" element={<Random/>} />
          </Routes>
        </Router>
        <p>new site tell them ppls</p>
        <Draggable/>

      </Layout>
    </div>
  )
}



export default HomePage;
