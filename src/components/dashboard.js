import React from "react";
import ActivitiesList from "./activities/ActivitiesList";
import ReflectionsList from "./relfections/ReflectionsList";

export default function Dashboard () {
  return (
    <>
      <ActivitiesList />
      <ReflectionsList />
    </>
  )
}
