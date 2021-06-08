import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Testimonials from './routes/Testimonials';
import Calculator from './routes/Calculator';
import NotFound from './routes/NotFound';

export default class App extends Component {

  toggleNav = (e) => {
    let nav = e.target.nextSibling
    if(!nav.classList.contains('active')) {
      nav.className += ' active'
    } else {
      nav.className = 'nav-links-container'
    }
  }

  closeNav = (e) => {
    e.target.parentNode.className = 'nav-links-container'
  }

  render() {
    return(
      <div className='app'>
        <div className='topbar'>
          <div className='left-box'>
            <Link to='/' className='landing-link'>MCR</Link>
          </div>
          <div className='center-box'>
            <Link to='/' className='landing-link'>Michael Cassat, Realtor®</Link>
          </div>
          <nav className='right-box'>
            <button className='hamburger' id='ham' onClick={e => this.toggleNav(e)}>&#9776;</button>
            <div className='nav-links-container' id='links'>
              <Link to='/about' onClick={e => this.closeNav(e)} className='nav-link'>About Cheyenne</Link>
              <Link to='/testimonials' onClick={e => this.closeNav(e)} className='nav-link'>Testimonials</Link>
              <Link to='/calculator' onClick={e => this.closeNav(e)} className='nav-link last'>Mortgage Calculator</Link>
            </div>
          </nav>
        </div>
        <main>
          <Switch>
          <Route
            exact
            path={'/'}
            component={Home}
          />
          <Route
            exact
            path={'/about'}
            component={About}
          />
          <Route
            exact
            path={'/testimonials'}
            component={Testimonials}
          />
          <Route
            exact
            path={'/calculator'}
            component={Calculator}
          />
          <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}