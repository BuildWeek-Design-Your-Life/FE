import React, { Component } from 'react'
import {Form, Field, Formik} from 'formik'
import axiosWithAuth from "../../Utils/axiosWithAuth";

class AddReflection extends Component {
    state = {
        newReflection: {
            Summary: '',
            Insights: '',
            Trends: '',
            users_ref_id: 1,
        }
    }

    handleChange = e => {
        this.setState({
            newReflection: {
                ...this.state.newReflection,
                [e.target.name]: e.target.value
            }
        })
        // console.log('onchange',this.state)
    }

    onSubmit = e => {
        e.preventDefault()
        console.log(this.state.newReflection)
        axiosWithAuth()
        .post(`https://design-bw.herokuapp.com/api/reflect`, this.state.newReflection)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err.message)})
    }

    render() {
        return (
            <>
            <Formik>
                <Form onSubmit={this.onSubmit}>
                    <Field type="text" name="Summary" value={this.state.summary} onChange={this.handleChange}/>              
                    <Field type="text" name="Insights" value={this.state.insights} onChange={this.handleChange}/>
                    <Field type="text" name="Trends" value={this.state.trends} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </Form>  
            </Formik>
            </>
        )
    }
}
export default AddReflection