import React from "react";

export default (props) => {
  const { decrementar, incrementar } = props;
  return (
    <div>
      <button type="button" onClick={decrementar}> -</button>
      <button type="button" onClick={incrementar}>+</button>
    </div>
  );
};
