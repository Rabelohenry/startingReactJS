import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default () => {
  const nomeF = "?";
  const idadeF = 0;
  const nerdF = false;

  // function fornecerInformacoes(nome, idade, bool) {
  //   nomeF = nome;
  //   idadeF = idade;
  //   nerdF = bool;
  // }

  return (
    <div>
      <div>
        <p>
          {nomeF}
          {" "}
          {idadeF}
          {" "}
          {nerdF ? "Verdadeiro" : "Falso"}
        </p>
      </div>
      <IndiretaFilho />
    </div>
  );
};
