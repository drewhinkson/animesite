import React from 'react'
import './navbar.css'
const Navbar =() =>{
    return (
        <nav className ="navbar navbar-inverse"> 
        <div className="container">
            <div className ="navbar-header">
            < a className="navbar-brand" href="#">Rand:0</a>
            </div>
            <ul className="nav navbar-nav">
               
                <li className="active">
                <a href="#">
                    <i className="fas fa-home" aria-hidden="true"> 
                </i>
                    Home
                    </a>
                </li>
                <li >
                <a href="#">
                    <i className="fas fa-home" aria-hidden="true"> 
                </i>
                    List
                    </a>
                </li>
                <li >
                <a href="#">
                    <i className="fas fa-home" aria-hidden="true"> 
                </i>
                    Bookmark
                    </a>
                </li>
                <li >
                <a href="#">
                    <i className="fas fa-home" aria-hidden="true"> 
                </i>
                    Random
                    </a>
                </li>
               
            </ul>
            <form className="navbar-form navbar-right" role="search" >
                <input className="form-control" type="text"  placeholder="search anime"></input>
            </form>
        </div>
        </nav>
    )
}
export default Navbar;