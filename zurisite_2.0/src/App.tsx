
import Layout from './components/HomeGrid';
import Draggable from './components/Draggable';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Art from './pages/Art';
import Random from './pages/Random';
import type {JSX} from 'react';

function HomePage(): JSX.Element {
  return (
    <div>
      <Router>
        <Layout>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/Blog" element={<Blog/>} />
              <Route path="/Art" element={<Art/>} />
              <Route path="/Random" element={<Random/>} />
            </Routes>
        </Layout>
      </Router>
      
    </div>
  )
}



export default HomePage;
