import React from 'react'
import './navtab.css'
const Navtab =()=>{
    return (
        <div className="hidden-xs container content">
            <br />
             <div> 
            <ul className ="nav nav-tabs indextab">
                <li className="active" style={{marginLeft:"15px"}}> 
                 <a href="#">
                     Latest
                 </a>
                </li>
                <li > 
                 <a href="#">
                     Ongoing
                 </a>
                </li>
                <li > 
                 <a href="#">
                     Added
                 </a>
                </li>
                <li > 
                 <a href="#">
                     Dark
                 </a>
                </li>
            </ul>
        </div>
        <div className="tab-content">
            <div id="new" className="tab-pane fade active in">
                <br />
            </div>
        </div>
        </div>
    )
}
export default Navtab