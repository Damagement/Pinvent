import React from 'react'
import "./auth-module.scss";
import {MdPassword} from 'react-icons/md';
import Card from '../../../components/card/Card';
import { Link } from 'react-router-dom';

const Reset = () => {
  return <div className={`container auth`}>
    <Card>
        <div className='form'>
            <div className="--flex-center">
              <MdPassword size={35} color="#999"/>
            </div>
            <h2>Reset Password</h2>          
             <form>
              <input type="password" placeholder='New Password' required="password"></input>
              <input type="password" placeholder="Confirm New Password" required="password"/>
              <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
             <div className='links'>
              <p>
             <Link to="/">-Home</Link>
             </p>
             <p>
             <Link to="/Login">-Login</Link>
             </p>
             </div>
             </form>
            </div>
    </Card>
         </div>
}

export default Reset