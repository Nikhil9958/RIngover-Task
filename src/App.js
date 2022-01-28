
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Sidebar3 from './components/Sidebar3';
import Workspace from './components/Workspace';
import Activity from './components/Activity';
import Tasks from './components/Tasks';
import Progress from './components/Progress';
import {
  BrowserRouter as Router,
  Routes,Switch,
  Route,
  Link
} from 'react-router-dom';
import Link1 from './components/Link1';
import { Link2 } from './components/Link2';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Sidebar/>
    
    <Workspace/>
    {/* <div className='workspace'> */}
    
    
    {/* </div> */}
    <Sidebar2/>
    <div className='sidebar3'>
    <div className='box'>
    <ul>
        <li ><Link to= "/activity" className='activity'>Activity</Link></li>
        <li ><Link to = "/tasks" className='tasks buttonBox'>Tasks</Link></li>
        <li ><Link to = "/progress" className='progress'>Progress</Link></li>
    </ul>
    </div>
    <Switch>
          
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/progress">
            <Progress />
          </Route>
    </Switch> 
    </div>
    
    </Router>
  
    </>
  );
}

export default App;
