import React from 'react'
import styles from"./auth-module.scss";
import {BiLogIn} from 'react-icons/bi';
import Card from '../../../components/card/Card';

const Login = () => {
  return <div className={`container ${styles.auth}`}>
    <Card>
        <div className={styles.form}>
            <div className="--flex-center">
                <BiLogIn size={35} color="#999"/>
            </div>
            <h2>Login</h2>          
             </div>
             <form>
              <input type="text" name="email" placeholder="Email"></input>
             </form>
    </Card>
         </div>
}

export default Login