import React, {useState} from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Register from './components/Register';
import Name from './components/Name';
import Admin from './components/Admin';
import "./App.css";

function App() {

  const [bankData, setBankData] = useState([
    {
      id: "",
      userName: "",
      password: "",
      income: "",
      expances: [{ companyName: "", expanseAmount: "" }],
    },
  ]);

  const newUser = (bankData) =>(
    setBankData([bankData], [...bankData])
  )

    
  

  return (
    <div className="App">

      <Router>
      <Switch>
      <Route exact path="/" component={() => { return ( 
      <Homepage 
      user={bankData.userName}
      pass={bankData.password}
      />);}}/>

      <Route exact path="/register" component={() => { return ( 
      <Register 
      newUser={newUser}
      id={bankData.id}
      user={bankData.userName}
      pass={bankData.password}
      money={bankData.income}
      />);}}/>

      <Route exact path="/name" component={() => { return (
      <Name />);}}/>

      <Route exact path="/admin" component={() => { return (
      <Admin />);}}/>
</Switch>
</Router>
    </div>
  );
}
export default App