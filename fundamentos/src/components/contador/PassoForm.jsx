import React from "react";

export default (props) => {
  const { passo, setPassso } = props;
  return (
    <div>
      <label htmlFor="passoInput">Passo:</label>
      <input
        id="passoInput"
        type="number"
        value={passo}
        onChange={(e) => setPassso(+e.target.value)}
      />
    </div>
  );
};
