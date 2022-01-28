import React from 'react';
import{Switch,Route, Router} from "react-router-dom";
import Link1 from './Link1';
import { Link2 } from './Link2';
import { Link3 } from './Link3';
import Link4 from './Link4';

const Workspace = () => {
  return (
   
      
      <div className='workspace'>
        <h1 className='workspace-heading'>Workspace</h1>
        <h2 className='workspace-sub'>Your workspace is empty!</h2>
        <p className='workspace-para'>To add a tab, click on any option on your bottom left</p>
        
  </div>
 
    );
};

export default Workspace;
