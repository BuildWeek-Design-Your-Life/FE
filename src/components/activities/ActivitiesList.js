import React, { useContext } from "react";

// Components
import ActivityCard from "./ActivityCard";

// Context
import { ActivityContext } from "../../context/ActivityContext";

const Activity = () => {
  // destructured object
  const { activitiesArray } = useContext(ActivityContext);

  return (
    <div className="activities-list">
      {activitiesArray.map(active => (
        <ActivityCard key={active.id} {...activitiesArray} active={active} />
      ))}
    </div>
  );
};

export default Activity;
