import React, { useState } from 'react';
import {Form, Field, Formik} from 'formik';
import axiosWithAuth from "../../Utils/axiosWithAuth";

export default function AddActivity () {

    const [activity, setActivity] = useState({});

    const handleChange = e => {
        setActivity({...activity, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
        // Post requests require two arguments = URL + state
            .post(`https://design-bw.herokuapp.com/api/activity/`, activity)
            .then(res => {console.log(res)})
            .catch(err => {console.log(err.message)})
    }

    return (
        <>
        <Formik>
            <Form onSubmit={submitForm}>
                <Field type="number" name="users_act_id" placeholder="User ID" onChange={handleChange} />
                <Field type="text" name="activity" placeholder="Activity" onChange={handleChange}/>              
                <Field type="number" name="energize" placeholder="How energized?" onChange={handleChange}/>
                <Field type="number" name="engagement" placeholder="How engaged?" onChange={handleChange}/>
                 <button type="submit">Submit</button>
            </Form>  
        </Formik>
        </>
    )
}

// class AddActivity extends Component {
//     state = {
//         newActivity: {
//             Activity: '',
//             Energy: 0,
//             Engagement: 0,
//             users_act_id: 1,
//         }
//     }

//     handleChange = e => {
//         this.setState({
//             newActivity: {
//                 ...this.state.newActivity,
//                 [e.target.name]: e.target.value
//             }
//         })
//         console.log(e.target.value);
//     }

//     handleNum = e => {
//         this.setState({
//             newActivity: {
//                 ...this.state.newActivity,
//                 [e.target.name]: e.target.value
//             }
//         })
//         console.log(e.target.value);
//     }

//     onSubmit = e => {
//         e.preventDefault()
//         console.log(this.state.newActivity)
//         axiosWithAuth()
//         .post(`https://design-bw.herokuapp.com/api/activity/`, this.state.newActivity)
//         .then(res => {console.log(res)})
//         .catch(err => {console.log(err.message)})
//     }

//     render() {
//         return (
//             <>
//             <Formik>
//                 <Form onSubmit={this.onSubmit}>
//                     <Field type="text" name="Activity" value={this.state.activity} onChange={this.handleChange}/>              
//                     <Field type="number" name="Energy" value={this.state.energize} onChange={this.handleNum}/>
//                     <Field type="number" name="Engagement" value={this.state.engagement} onChange={this.handleNum}/>
//                     <button type="submit">Submit</button>
//                 </Form>  
//             </Formik>
//             </>
//         )
//     }
// }
// export default AddActivity