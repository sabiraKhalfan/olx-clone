import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../Firebase/config';
import Logo from '../../olx-logo.png';
// import { FirebaseContext } from '../../Store/Context';
import './Login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      alert('Welcome');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt={''}></img>
        <form onSubmit={handleLogin}>
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
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        {// eslint-disable-next-line
        <a onClick={()=>navigate('/signup')}>Signup</a>}
      </div>
    </div>
  );
}

export default Login;
