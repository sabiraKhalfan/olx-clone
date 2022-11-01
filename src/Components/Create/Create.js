import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../Store/Context';
import { firebase } from '../../Firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'

const Create = () => {
  const navigate = useNavigate();
  const {storage} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext)
  const [productName, setproductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const date = new Date()
  
  const handleSubmit = () =>{
    const storageRef = ref(storage, `product-images/${image.name}`);
    uploadBytesResumable(storageRef,image).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url)=>{
        addDoc(collection(firebase,'products'),{
          productName,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        })
        navigate('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={productName}
              onChange={(e)=>setproductName(e.target.value)}
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
              className="input" 
              type="number"
              value={price}
              onChange={(e)=>setPrice(e.target.value)} 
              id="fname" 
              name="Price" />
            <br />
          <br />
          <img 
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ''}>  
            </img>
            
            <br />

            <input 
            onChange={(e)=>setImage(e.target.files[0])}
             type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
    </Fragment>
  );
};

export default Create;
