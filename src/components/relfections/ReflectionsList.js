import React, { useContext } from "react";

// Components
import ReflectionCard from "./RelfectionCard";

// Context
import { ReflectionContext } from "../../context/ReflectionContext";

const ReflectionsList = () => {
  // destructured object
  const { reflectionsArray } = useContext(ReflectionContext);

  return (
    <div className="reflections-list">
      {reflectionsArray.map(reflect => (
        <ReflectionCard
          key={reflect.id}
          {...reflectionsArray}
          reflect={reflect}
        />
      ))}
    </div>
  );
};

export default ReflectionsList;
