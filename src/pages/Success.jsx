import React from "react";
import { useLocation } from "react-router-dom";

const Success = (props) => {
  const location = useLocation();

  console.log(location)

  return (
    <div>
      <h1>successful</h1>
    </div>
  )
};

export default Success;
