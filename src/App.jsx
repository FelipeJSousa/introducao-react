import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import ContadorIndireto from './components/comunicacao/indireta/Contador/Contador'
import Mega from './components/mega/Mega'


export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#12 - MegaSena" backgroundColor="#33BBF2">
                <Mega sequencia={8}></Mega>
            </Card>
            <Card titulo="#11 - Contador Indireto" backgroundColor="#55aAc2">
                <ContadorIndireto></ContadorIndireto>
            </Card>
            <Card titulo="#10 - Contador" backgroundColor="#99cAb2">
                <Contador passo={10} valor ={100}></Contador>
            </Card>
            <Card titulo="#09 - Formulário" backgroundColor="#10cAb2">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" backgroundColor="#1002Fa">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" backgroundColor="#1652Fa">
                <Pai sobrenome="Martinho"></Pai>
            </Card>
            <Card titulo="#06 - CondicionalComIF" backgroundColor="#fe4a49">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional" backgroundColor="#2ab7ca"> 
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" backgroundColor="#fed766">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - ComFilhos" backgroundColor="#851e3e">
                <ComFilhos>
                    <ul>
                        <li>Isa</li>
                        <li>Felipe</li>
                        <li>Mario</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - ComParametro" backgroundColor="#051e3e">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"></ComParametro>
            </Card>
            <Card titulo="#01 - Primeiro" backgroundColor="#009688">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)