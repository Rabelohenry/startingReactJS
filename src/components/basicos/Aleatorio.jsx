import React from "react";

export default (props) => {
  const { min, max } = props;
  const esc = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2><strong>Valor aleatorio</strong></h2>
      <p>
        Valor mínimo:
        {min}
      </p>
      <p>
        Valor máximo:
        {max}
      </p>
      <p>
        Valor escolhido:
        {esc}
      </p>
    </div>
  );
};
