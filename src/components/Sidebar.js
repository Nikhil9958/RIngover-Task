import React from 'react';
import {
  BrowserRouter as Router,
  Routes,Switch,
  Route,
  Link
} from 'react-router-dom';
import Link1 from './Link1';
import { Link2 } from './Link2';
import { Link3 } from './Link3';
import Link4 from './Link4';

const Sidebar = () => {
  return (
  <div className='sidebar'>
    {/* <div> */}
    <div className='sideheading'>Jean-Samuel Najnudel</div>
    <div className='designation'>President</div>
    <div className='company'> Ringover</div>
    <div className='or'>  </div>
    <div className='company-size'>101-250</div>
    <a className='sidelink' href="http://www.ringover.com"> http://www.ringover.com </a>
    <hr className='upper-hr'/>
    <hr className='lower-hr'/>
    {/* </div>  */}

    <p className='topics'>Topics</p>
    {/* <p className='topic1'>Some topic</p> */}
    <button className='topic1'>Some topic</button>
    <button className='topic2'>Some topic name</button>

    {/* <div className='contact-details'> */}
    <h6 className='contact'>Contact</h6>
    <p className='email'>j.nanudel@ringover.com</p>
    <p className='phone1'>+33 07 55 35 23 21 <p className='primary'> Primary </p></p>
    <p className='phone2'>+33 99 53 05 19 21</p>
    {/* </div> */}

    {/* <div className='additional'> */}
      <h2 className='additional'>Additional</h2>
      <p className='email-additional'>president@ringover.com</p>
      <p className='country'>Français</p>
      <p className='youtube'>www.youtube.com/ringover</p>
      <p className='time'>Indian Standard (+5:30)</p>
    {/* </div> */}
    <Router>
    <div className="lowBox">
    <ul>
        <li><Link to= "/link1" >Link 1</Link></li>
        <li ><Link to = "/link2" >Link 2</Link></li>
        <li ><Link to = "/link3" >Link 3</Link></li>
        <li ><Link to = "/link4" >Link 4</Link></li>
    </ul>
      </div> 
    </Router>
    
  </div>
  );
};

export default Sidebar;
