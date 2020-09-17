import "./App.css";
import React from "react";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

const App = () => (
  <div>

    <div className="Cards">

      <Card titulo="Comunicação indireta" color="#8bad39">
        <IndiretaPai />
      </Card>

      <Card titulo="Comunicação" color="#59323c">
        <DiretaPai />
      </Card>

      <Card titulo="Condicional" color="#982395">
        <ParOuImpar numero={3} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ apelido: "ze" }} />
      </Card>

      <Card titulo="Repetição 2" color="#3a9ad9">
        <TabelaProdutos />
      </Card>

      <Card titulo="Repetição" color="#ff4c65">
        <ListaAlunos />
      </Card>

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
