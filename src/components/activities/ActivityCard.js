+import React from "react";
import styled from "styled-components";

let GridContainer = styled.div`
    display: inline-grid;
    grid-template-columns: auto;
    background-color: transparent;
    padding: 10px;
    width: 500px;
`

let GridItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
`
export default function ActivityCard (props) {
    return (
        <GridContainer>
            <GridItem>
                <h2>{props.activity.activity}</h2> 
                <p>Energy: {props.activity.energize}</p>
                <p>Engagement: {props.activity.engagement}</p>
            </GridItem>
        </GridContainer>
    )
}