import React, {useState} from 'react'
import Sub from './Sub'

export default (props) =>{
    // Struct (a,b) são variaveis da struct e recebem valores da direita
    // const [a, b] = [1,2]
    const [num,setNum] = useState(0)
    const [label,setLabel] = useState(0)

    // function OnClick(valor, texto){
    //     console.log(texto || 'Numero Gerado: ')
    //     console.log(valor)
    // }
    
    function OnClick(valor, texto){
        setNum(valor);
        setLabel(texto);
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub OnClick={OnClick} numero={num}></Sub>
            <h3>{label !== 0 ? label : ""}</h3>
        </div>
    )
}