import React from "react";
import useAxios from "axios-hooks";

function DashboardTemperature() {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:3000/get-last-temperature"
  );

  console.log(loading);
  console.log(error);
  console.log(refetch);

  if (error) throw error;

  return (
    <div>
      <h1>{data} °C</h1>
    </div>
  );
}

export default DashboardTemperature;
