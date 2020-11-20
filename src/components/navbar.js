import React from 'react';
import '../CSS/navbar.css';
import Logo from '../logo2222.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-inverse'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>
            <img src={Logo} className='logo' />
          </a>
        </div>
        <ul className='nav navbar-nav'>
          <li className=''>
            <a href='#'>
              <i className='fas fa-home'></i>
              Home
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-list'></i>
              List
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-bookmark' aria-hidden='true'></i>
              Bookmark
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-random' aria-hidden='true'></i>
              Random
            </a>
          </li>
        </ul>
        <form className='navbar-form navbar-right' role='search'>
          <div className='input group'>
            <button className='btn btn-primary'>
              <i class='fas fa-search'></i>
            </button>
            <span className='input group'></span>
            <input
              className='form-control'
              type='text'
              placeholder='search anime'></input>
          </div>
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
