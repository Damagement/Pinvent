import React from 'react'
import "./auth-module.scss";
import {AiOutlineMail} from 'react-icons/ai';
import Card from '../../../components/card/Card';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return <div className={`container auth`}>
    <Card>
        <div className='form'>
            <div className="--flex-center">
              <AiOutlineMail size={35} color="#999"/>
            </div>
            <h2>Forgot Password</h2>          
             <form>
              <input type="text" placeholder='Email' required="email"></input>
              <button type='submit' className='--btn --btn-primary --btn-block'>Get Reset Email </button>
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

export default Forgot