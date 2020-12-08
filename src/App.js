// import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Publication from './pages/Publication';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>

      <Header/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/news' component={News} />
      <Route exact path='/publication' component={Publication} />
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
