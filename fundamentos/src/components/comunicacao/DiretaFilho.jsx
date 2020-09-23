import React from "react";

export default (props) => {
  const { nome, idade, bool } = props;
  return (
    <div>
      <span>
        {nome}
        {" "}
      </span>
      <span>
        {idade}
        {" "}
      </span>
      <span>{bool ? "Verdadeiro" : "Falso"}</span>
    </div>
  );
};
