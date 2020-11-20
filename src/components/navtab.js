import React from 'react';
import '../CSS/navtab.css';
const Navtab = () => {
  return (
    <div className='hidden-xs container content'>
      <br />
      <div>
        <ul className='nav nav-tabs indextab'>
          <li className='active' style={{ marginLeft: '15px' }}>
            <a href='#'>Latest</a>
          </li>
          <li>
            <a href='#'>Popular 2020</a>
          </li>
          <li>
            <a href='#'>Ongoing</a>
          </li>
          <li>
            <a href='#'>Added</a>
          </li>
        </ul>
      </div>
      <div className='tab-content'>
        <div id='new' className='tab-pane fade active in'>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Navtab;
