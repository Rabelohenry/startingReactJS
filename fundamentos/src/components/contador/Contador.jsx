import './Contador.css';
import React, { Component } from "react";

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {
  state = {
      numero: this.props.numeroInicial || 0,
      passo: this.props.passoInicial || 5
  }

  inc = () =>{
    this.setState({
      numero:this.state.numero + this.state.passo,
    });
  }

  dec = () =>{
    this.setState({
      numero:this.state.numero - this.state.passo,
    });
  }

  setPassso = (novoPasso) =>{
    this.setState({
      passo: novoPasso,
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display num={this.state.numero}/>
        <PassoForm passo={this.state.passo} setPassso={this.setPassso}/>
        <Botoes decrementar={this.dec} incrementar={this.inc}/>
      </div>
    );
  }
}

export default Contador;
