import React, { cloneElement } from "react";

export default (props) => {
  const { children } = props;
  return (
    <div>
      {
        children.map((el, i) => cloneElement(el, { ...props, key: i }))
      }
    </div>
  );
};
