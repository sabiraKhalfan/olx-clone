import React, { useContext, useEffect } from 'react';
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { AuthContext } from './Store/Context';
import { auth } from './Firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Post from './Store/PostContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost'

function App() {
  const {setUser} = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(auth,
      (user)=>{setUser(user)})
  })
  
  return (
    <div>
      <Post>
    
      <Router>
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/view' element={<ViewPost/>}/>
        </Routes>  
      
      </Router>
    
    </Post>
    </div>
  );
}

export default App;
