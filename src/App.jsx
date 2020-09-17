import "./App.css";
import React from "react";

import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

const App = () => (
  <div>

    <div className="Cards">

      <Card titulo="Componente com filhos" color="#00c8f8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="Fragmento" color-="#e8b71a">
        <Fragmento />
      </Card>

      <Card titulo="Com parâmetro" color="#e94c6f">
        <ComParametro titulo="Segundo Componente" subtitulo="Muito legal" />
      </Card>

      <Card titulo="Primeiro" color="#588c73">
        <Primeiro />
      </Card>
    </div>

  </div>
);

export default App;
