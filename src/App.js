import { useState } from 'react';
import {BrowserRouter as router, Route, Switch, Router} from 'react-router-dom'
import './App.css';
import Login from './Login';
import Register from './Register';



function App() {

  let [currentPage, setCurrentPage] = useState(false);
    

 const registrationHandle = () => {
  setCurrentPage(!currentPage);
 }
   

  return (
    <Router>
<div className="App">
  <Switch >
    <Route path='/login'>
    <Login onRegistration ={registrationHandle} />
    </Route>
    <Route path='/register'>
    <Register onRegistration ={registrationHandle} />
    </Route>
    <Route>
      hello
    </Route>
  </Switch>
      {currentPage ? <Login onRegistration ={registrationHandle} /> : <Register onRegistration ={registrationHandle}  /> }
    </div>
    </Router>
    
  );
}

export default App;
