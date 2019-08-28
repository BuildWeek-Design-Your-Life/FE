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
                <Form className="user-input" onSubmit={this.onSubmit}>
                    <Field className="user-input-field" type="text" name="Summary" placeholder="Summary" value={this.state.summary} onChange={this.handleChange}/>              
                    <Field className="user-input-field" type="text" name="Insights" placeholder="Insights" value={this.state.insights} onChange={this.handleChange}/>
                    <Field className="user-input-field" type="text" name="Trends" placeholder="Trends" value={this.state.trends} onChange={this.handleChange}/>
                    <button className="user-input-button" type="submit">Submit</button>
                </Form>  
            </Formik>
            </>
        )
    }
}
export default AddReflection