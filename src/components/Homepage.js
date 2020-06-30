import React, {useState} from 'react'
import {Link } from "react-router-dom";

function Homepage(props) {
    const [user, setUser]=useState(props.user);
    const [pass, setPass]=useState(props.pass);

  const validUser = () =>{
    if (user === 'ADMIN' && pass === 'ADMIN'){
        return(
          <Link to='/admin'>
                  <button >Enter</button></Link>
        ) }else {
          return(
            <button>Enter</button>
          )
        }
    }

    return (
        <div>
             <p>SVcollege test by Jonathan Mordecayov</p>
                  <h1>SV BANK</h1>
                  

                  <input type='text' placeholder='User Name' onChange={e=>{setUser(e.target.value)}}></input>
                  <br/>
                  <input type='password' placeholder='Password' onChange={e=>{setPass(e.target.value)}}></input>
                  <br/>
                <Link to='/register'>
                Create New User</Link>
                <br/>
                {validUser()}
        </div>
    )
}

export default Homepage
