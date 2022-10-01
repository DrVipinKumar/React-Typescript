import React from "react";

const CallbackTitle = () => {
  console.log("Rendering Inside Callback Title");
  return (
    <div>
      <h2>This is use of useCallback Hooks in React with Typescript</h2>
    </div>
  );
};

export default React.memo(CallbackTitle);
