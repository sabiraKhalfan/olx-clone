import React, { useContext, useEffect, useState } from 'react';
import firebase  from '../../Firebase/Config2';
import { PostContext } from '../../Store/PostContext';

import './View.css';
function View() {
  const [userDetails, setUserDetails] = useState('');
  const {postDetails} = useContext(PostContext)
  const id = postDetails.userId
    useEffect(() => {
      
      firebase.firestore().collection('users').where('id','==',id).get().then((res)=>{
        res.forEach(doc => {
          console.log(doc.data());
          setUserDetails(doc.data());
        })
      })
    },[])
     

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="Product Image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 250000 </p>
          <span>{postDetails.productName}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
