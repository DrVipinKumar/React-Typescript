import React from "react";
const UseCallbackTitle = () => {
  console.log("Rendering inside UseCallback Title");
  return (
    <div>
      <h2>UseCallback Title </h2>
    </div>
  );
};

export default React.memo(UseCallbackTitle);
