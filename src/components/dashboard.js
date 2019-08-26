import React from "react";
import axios from "axios";
import { Slider } from "shards-react";
import Menu from "../components/menu";
import "../index.css";

const API = "#"
const DEFAULT_QUERY = "redux"

export default function Dashboard() {
    return (
        <Container className="DashboardContainer">
            // This section needs to pull in the exercise className
                <div>
                    <H1>Activity Name:</H1>
                        // Code to pull activity name from database
                        let activity = axios.get(username.activitynumber);
                        console.log activity
                </div>
            // This section needs to create a slider for inputting the new entry
                <Slider connect={[true, false]} start={[1]} range={{ min: 0, max: 5 }} />
            // This section should tally the daily average
                // This section will get the previous total
                   let total = axios.get(username.activitynumber.total);
                // This section will get the total number of days and add 1. Finally saving it.
                    // days = days + 1
                    let days = axios.get(username.activitynumber.days) + 1; 
                // This section will add the new total to the previous total and save the input
                    // let newTotal = total + Slider
                // This section will show the results of newtotal/totalnumber of days.
                    let average = newTotal / days;
        </Container>
    )
}