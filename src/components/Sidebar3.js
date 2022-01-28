import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar3 = () => {
  return (
  <div className='sidebar3'>
    <div className='box'>
    <ul>
        <li ><Link  to= "/activity">Activity</Link></li>
        <li><Link to = "/tasks">Tasks</Link></li>
        <li><Link to = "/progress">Progress</Link></li>
    </ul>
    </div>

  </div>);
};

export default Sidebar3;
