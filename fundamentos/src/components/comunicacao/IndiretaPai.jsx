import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default () => {
  const [nome, setNome] = useState("ze");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nomeF, idadeF, bool) {
    setNome(nomeF);
    setIdade(idadeF);
    setNerd(bool);
  }

  return (
    <div>
      <div>
        <p>
          {nome}
          {" "}
          {idade}
          {" "}
          {nerd ? "Verdadeiro" : "Falso"}
        </p>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
