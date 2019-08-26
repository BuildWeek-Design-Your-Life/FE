import React from "react";
import { Slider } from "shards-react";
import Menu from "../components/menu";
import "../index.css";

export default function Dashboard() {
    return (
        <Container className="DashboardContainer">
            // This section needs to pull in the exercise className

            // This section needs to create a slider for inputting the new entry
                <Slider connect={[true, false]} start={[1]} range={{ min: 0, max: 5 }} />
            // This section should tally the daily average
                // This section will get the previous total

                // This section will get the total number of days and add 1. Finally saving it.

                // This section will add the new total to the previous total and save inputting

                // This section will show the results of newtotal/totalnumber of days.
                
        </Container>
    )
}