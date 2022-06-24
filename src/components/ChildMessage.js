import React, { useEffect } from "react";

let childMessCount = 0;
function ChildMessage() {
  useEffect(() => {
    childMessCount++;
  });
  return (
    <div className="message">
      <h2> Child Message : {childMessCount}</h2>
    </div>
  );
}
export default ChildMessage;
