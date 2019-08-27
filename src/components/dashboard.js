import React from "react";
import axios from "axios";
import "../index.css";
import shards from "shards-react"

instance.defaults.headers.common['Authorization'] = token;

export default function Dashboard() {
    return (
        <Container classname = "DashboardContainer">
            <h1>Dashboard</h1>
            {/* This section is designed to pull all of the material from the activities section of the database and show it here. */}
            componentDidMount() {
                axios.get('https://design-bw.herokuapp.com/api/activity/', {
                    params: {
                        ID: userID
                    }
                })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
            }


        </Container>
    )
}