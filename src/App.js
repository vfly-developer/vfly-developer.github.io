import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './tailwind.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import AboutMe from './views/AboutMe'
import Project from './views/Project'
import Projects from './views/Projects'
import Blog from './views/Blog'
import ContactMe from './views/ContactMe'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <AboutMe />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/projects/:id">
            <Project />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
