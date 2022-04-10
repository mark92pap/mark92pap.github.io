import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Projects from './pages/Projects';

import './utilities.css'
import './App.css'
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/projects/:id?" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
