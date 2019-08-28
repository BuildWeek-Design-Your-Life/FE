import React, { useState, useEffect } from "react";
import ReflectionCard from "./RelfectionCard";
import axiosWithAuth from "../../Utils/axiosWithAuth";

export default function ReflectionsList (props) {
  const [reflectionsArray, setReflections] = useState([]);
  console.log(reflectionsArray);
  const getReflections = () => {
    return axiosWithAuth()
      .get("https://design-bw.herokuapp.com/api/reflect")
      .then(res => {
        setReflections(res.data);
      })
      .catch(err => {
        console.log("This is bad", err.response);
      });
  };

  useEffect(() => {
    getReflections();
  }, []);

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