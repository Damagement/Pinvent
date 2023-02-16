import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { changePassword } from '../../services/authService'
import Card from '../card/Card'
import "./ChangePassword.scss"

const initialState= {
    oldPassword:"",
    password:"",
    password2:"",
  }

const ChangePassword = () => {
    const [formData, setformData] =useState(initialState)
    const {oldPassword,password,password2} = formData;
    const navigate=useNavigate()

    const handleInputChange =(e) => {
        const {name,value} = e.target;
        setformData({...formData, [name]: value}) 
      };

      const changePass = async(e) =>{
        e.preventDefault()

        if (password != password2){
            return toast.error("New password doesnot match")
        }

        const formData ={
            oldPassword,
            password,
        }
        const data = await changePassword(formData)
        toast.success(data)
        navigate("/profile")
    };    
  return( 
  <div className="change-password">
    <Card cardClass={"password-card"}>
        <h4> Change Password</h4>
        <form className='--form-control' onSubmit={changePass}>
            <input type="password" placeholder="Old Password" required name="oldPassword" value={oldPassword} onChange={handleInputChange}/>
            <input type="password" placeholder="New Password" required name="password" value={password} onChange={handleInputChange}/>
            <input type="password" placeholder="Confirm New Password" required name="password2" value={password2} onChange={handleInputChange}/>
            <button className='--btn --btn-primary' type="submit">Reset Password</button>
        </form >
    </Card>
  </div>
  )
}

export default ChangePassword