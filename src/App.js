
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const HomePage = React.lazy(() => import("./components/HomePage"));
const SingleMoviePage = React.lazy(() =>import("./components/SinglePage"));
function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback = {"loading ..."}>
        <Switch>
          <Route exact path = "/movie-app" component={HomePage} />
          <Route path = "/movie/:id" component={SingleMoviePage} />
        </Switch>
      </React.Suspense>
      <Footer />
    </Router>
   
  );
}

export default App;
