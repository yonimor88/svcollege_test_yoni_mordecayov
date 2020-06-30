import React, {useState} from 'react'
import {Link} from "react-router-dom";

/// notes to myself
// need to know how to use .map and .filter correctly
// need to know how to transfer data between components correctly
function Register(props) {

    const [id, setId]=useState('')
    const [user, setUser]=useState('')
    const [pass, setPass]=useState('')
    const [confrirmPass, setConfirmPass]=useState('')
    const [money, setMoney]=useState('')

   

    const createUser = () => {
        if (id.length === 9 && user.length > 4 && pass.length >=6 && confrirmPass === pass && money < 1000000 && money > 0){
        props.newUser({id:id, userName:user, password:pass, income:money})

            return (<Link to='/name'><button >create</button></Link>
        )
        } else { 
            return (<button>create</button>)
        }
    }
    return (
        <div>
             <p>SVcollege test by Jonathan Mordecayov</p>
              <h1>Register</h1>
              <br/>
              <input placeholder='ID' onChange={e=>setId(e.target.value)}></input>
              <br/>
              <input placeholder='User Name' onChange={e=>setUser(e.target.value)}></input>
              <br/>
              <input placeholder='Password' onChange={e=>setPass(e.target.value)}></input>
              <br/>
              <input placeholder='Confirm Pass' onChange={e=>setConfirmPass(e.target.value)}></input>
              <br/>
              <input placeholder='Money' onChange={e=>setMoney(e.target.value)}></input>
              <br/>
              {createUser()}
        </div>
    )
}

export default Register
