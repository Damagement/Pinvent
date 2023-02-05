import React from 'react'
import "./auth-module.scss";
import {TiUserAdd} from "react-icons/ti";
import Card from '../../../components/card/Card';
import { Link } from 'react-router-dom';

const Register = () => {
  return <div className={`container auth`}>
    <Card>
        <div className='form'>
            <div className="--flex-center">
              <TiUserAdd size={35} color="#999"/>
            </div>
            <h2>Register</h2>          
             <form>
              <input type="text" placeholder="Name" required="name"></input>
              <input type="text" placeholder="Email" required='email'></input>
              <input type="password" placeholder='Password' required="password"></input>
              <input type="password" placeholder='Confirm Password' required="password"></input>
              <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
             </form>
             <span className='register'>
             <Link to="/">Home </Link>
             <p> &nbsp; Already Have an Account ?&nbsp;</p>
             <Link to="/login"> Login</Link>
             </span>
             </div>
    </Card>
         </div>
}

export default Register