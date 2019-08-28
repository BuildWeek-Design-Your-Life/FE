import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../../Utils/axiosWithAuth';

const UpdateForm = (props) => {
  console.log(props)
  const [newActivity, setNewActivity] = useState({
    activity:"",
    engagement:"",
    energize: ""
  });

  const handleChange = e => setNewActivity({...newActivity, [e.target.name]: e.target.value});


  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
    .put(`https://design-bw.herokuapp.com/api/activity/${props.match.params.id}`, newActivity)
      .then(res =>{
        console.log('put req', res)
        props.history.push('/')
      })
      .catch(err=> console.log(err.response))
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="activity"
             placeholder="activity"
             value={newActivity.activity}
             onChange={handleChange} />
      <input type="number"
             name="engagement"
             placeholder="engagement 1-10"
             value={newActivity.engagement}
             onChange={handleChange} />
      <input type="number"
             name="energize"
             placeholder="energize 1-10"
             value={newActivity.energize}
             onChange={handleChange} />
      <button type="submit">Update Activity</button>
    </form>
  );
};

export default UpdateForm;