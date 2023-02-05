import React from 'react'
import "./auth-module.scss";
import {BiLogIn} from 'react-icons/bi';
import Card from '../../../components/card/Card';
import { Link } from 'react-router-dom';

const Login = () => {
  return <div className={`container auth`}>
    <Card>
        <div className='form'>
            <div className="--flex-center">
              <BiLogIn size={35} color="#999"/>
            </div>
            <h2>Login</h2>          
             <form>
              <input type="text" placeholder="Email" required='email'></input>
              <input type="password" placeholder='Password' required="password"></input>
              <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
             </form>
             <Link to="/forgot">Forgot Password?</Link>
             <span className='register'>
             <Link to="/">Home </Link>
             <p>&nbsp;  Dont Have an Account ? &nbsp; </p>
             <Link to="/register"> Register</Link>
             </span>
             </div>
    </Card>
         </div>
}

export default Login