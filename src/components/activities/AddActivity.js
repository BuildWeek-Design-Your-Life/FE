import React, { Component } from 'react';
import {Form, Field, Formik} from 'formik';
import axiosWithAuth from "../../Utils/axiosWithAuth";

class AddActivity extends Component {
    state ={
        newActivity:{
            Activity: '',
            Energy: '',
            Engagement: '',
            users_act_id: 1
        }
    }

    handleChange = e => {
        this.setState({
            newActivity: {
                ...this.state.newActivity,
                [e.target.name]: e.target.value
            }
        })
        // console.log(e.target.value);
    }

    handleNum = e => {
        this.setState({
            newActivity: {
                ...this.state.newActivity,
                [e.target.name]: Number(e.target.value)
            }
        })
        // console.log(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state.newActivity)
        axiosWithAuth()
        .post(`https://design-bw.herokuapp.com/api/activity`, this.state.newActivity)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err.message)})
    }

    render() {
        return (
            <>
            <Formik>
                <Form onSubmit={this.onSubmit}>
                    <Field type="text" name="Activity" value={this.state.Activity} onChange={this.handleChange}/>              
                    <Field type="number" name="Energy" value={this.state.Energize} onChange={this.handleNum}/>
                    <Field type="number" name="Engagement" value={this.state.Engagement} onChange={this.handleNum}/>
                    <button type="submit">Submit</button>
                </Form>  
            </Formik>
            </>
        )
    }
}
export default AddActivity