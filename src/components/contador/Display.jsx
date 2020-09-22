import React from "react";

export default (props) => {
  const { num } = props || 0;
  return (
    <div>
      {num}
    </div>
  );
};
