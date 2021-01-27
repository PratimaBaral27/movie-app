
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';

const HomePage = React.lazy(() => import("./components/HomePage"));
const Footer = React.lazy(() => import ("./components/Footer"));
const SingleMoviePage = React.lazy(() =>import("./components/SinglePage"));
function App() {
  return (
    <Router>
  
      <Navbar />
      <React.Suspense fallback = {<Spinner />}>
        <Switch>
          <Route exact path = "/movie-app" component={HomePage} />
          <Route path = "/movie/:id" component={SingleMoviePage} />
        </Switch>
        <Footer />
      </React.Suspense>
    </Router>
   
  );
}

export default App;
