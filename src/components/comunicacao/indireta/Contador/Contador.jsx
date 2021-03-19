import React, {Component} from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Buttons from './Buttons'

import './contador.css'


export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () =>{
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () =>{
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    AlterarPasso = (value) =>{
        this.setState({
            passo: value
        })
    }

    render(){
        return (
            <div className="Contador">
                <h2>Contador 2</h2>
                <PassoForm passo={this.state.passo}
                    onPassoChange={this.AlterarPasso}>
                </PassoForm>
                <Display valor={this.state.valor}></Display>
                <Buttons onInc={this.inc}
                    onDec={this.dec}>
                </Buttons>
            </div>
        )
    }

}
