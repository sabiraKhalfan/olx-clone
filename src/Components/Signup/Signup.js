import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useState, useContext } from 'react';
import { collection,addDoc } from 'firebase/firestore';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext)

  function handleSubmit(e){
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password).then((result)=>{
      updateProfile(result.user,{displayName: username}).then(()=>{
        addDoc(collection(firebase,'users'),{
          id: result.user.uid,
          name: username,
          phone: phone
        }).then(()=>{
          navigate('/login');
        })
      })
    }).catch(err=>console.log(err))
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt={''}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="username"
            name="name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        {// eslint-disable-next-line
        <a onClick={()=>navigate('/login')}>Login</a>}
      </div>
    </div>
  );
}
