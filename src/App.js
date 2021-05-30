import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Testimonials from './routes/Testimonials';
import Calculator from './routes/Calculator';
import NotFound from './routes/NotFound';

export default class App extends Component {

  toggleNav = () => {
    /*
    let nav = document.getElementById('links')
    let hamburger = document.getElementById('ham')
    let x = document.getElementById('x')
    if(!nav.classList.contains('active')) {
      nav.classList.addClass('active')
      hamburger.addClass('hidden')
      x.removeClass('hidden')
    } else {
      nav.classList.removeClass('active')
      hamburger.removeClass('hidden')
      x.addClass('hidden')
    }
    */
  }

  render() {
    return(
      <div className='app'>
        <div className='topbar'>
          <div className='left-box'>
            <Link to='/'>MCR</Link>
          </div>
          <div className='center-box'>
            <Link to='/'>Michael Cassat Realty</Link>
          </div>
          <nav className='right-box'>
            <div className='nav-links-container' id='links'>
              <Link to='/about' className='nav-link'>About Cheyenne</Link>
              <Link to='/testimonials' className='nav-link'>Testimonials</Link>
              <Link to='/calculator' className='nav-link'>Mortgage Calculator</Link>
            </div>
            <button className='hamburger' id='ham' onClick={this.toggleNav()}>&#9776;</button>
            <button className='x hidden' id='x' onClick={this.toggleNav()}>X</button>
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
            path={'/'}
            component={About}
          />
          <Route
            exact
            path={'/'}
            component={Testimonials}
          />
          <Route
            exact
            path={'/'}
            component={Calculator}
          />
          <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    )
  }
}