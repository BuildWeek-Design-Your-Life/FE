import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateForm = (props) => {
  console.log(props);
  const [activity, setActivity] = useState({
    activity:"",
    engagement:"",
    energize: ""
  }
  );

  useEffect(() => {
    setActivity(props.activity);
  }, [props.activity]);

  const handleChange = e => setActivity({...activity, [e.target.name]: e.target.value});


  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`https://design-bw.herokuapp.com/api/activity${activity.id}`, activity)
      .then(res => {
        console.log(res);
        props.updateActivity(res.data);
        // props.getMovies();
        props.history.push('/');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="activity"
             placeholder="activity"
             value={props.activity}
             onChange={handleChange} />
      <input type="number"
             name="engagement"
             placeholder="engagement 1-10"
             value={props.engagement}
             onChange={handleChange} />
      <input type="number"
             name="energize"
             placeholder="energize 1-10"
             value={props.energize}
             onChange={handleChange} />
      <button type="submit">Update Activity</button>
    </form>
  );
};

export default UpdateForm;