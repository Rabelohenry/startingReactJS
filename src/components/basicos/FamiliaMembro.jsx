import React from "react";

export default (props) => {
  const { nome, sobrenome } = props;
  return (
    <div>
      <span>
        {nome}
        <strong>
          {" "}
          {sobrenome}
        </strong>
      </span>
    </div>
  );
};
