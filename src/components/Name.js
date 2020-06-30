import React, {useState} from 'react'
import {Link } from "react-router-dom";

function Name() {
    return (
        <div>
            <p>SVcollege test by Jonathan Mordecayov</p>
              <h1>Welcome {}</h1>
              <button>Balance</button>
              <br/>
              <button>Action</button>
              <br/>
              <Link to='/register'>
              <button>Edit</button></Link>
              <br/>
              <Link to='/'>
              <button>Exit</button></Link>
              <br/>
        </div>
    )
}

export default Name
