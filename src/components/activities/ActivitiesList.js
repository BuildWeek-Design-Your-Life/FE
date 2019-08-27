import React, { useState, useEffect } from "react";

import ActivityCard from "./ActivityCard";
import { axiosWithAuth }  from "../../Utils/axiosWithAuth";

const ActivitiesList = () => {
    // const [activitiesArray, setActivities] = useState({});

    // const getActivities = () => {
    //     axiosWithAuth()
    //         .get(`https://design-bw.herokuapp.com/api/activity`)
    //         .then(res => {
    //             console.log(res.data)
    //             // setActivities(res.data);
    //         })
    //         .catch(err => {
    //             console.log('This is bad', err.response);
    //         }) 
    // }

    // useEffect(() => {
    //     getActivities();
    // }, []) 
    
    return (
        <div className="activities-list grid-view">
           <ActivityCard />
        </div>
    )
}

export default ActivitiesList;