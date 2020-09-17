import React from "react";

export default (props) => {
  console.log("a");

  return (
    <div>
      <div>Filho</div>
      <button onClick={
        (_) => props.quandoClicar("João", 53, true)
      }
      >
        Fornecer informações
      </button>
    </div>
  );
};
