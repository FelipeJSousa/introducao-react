import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'


export default (props) => (
    <div className="App">
        <Card titulo="#06 - CondicionalComIF">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - ComFilhos">
            <ComFilhos>
                <ul>
                    <li>Isa</li>
                    <li>Felipe</li>
                    <li>Mario</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - ComParametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro">
            <Primeiro></Primeiro>
        </Card>
    </div>
)