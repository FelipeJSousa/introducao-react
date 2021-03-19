import React, {useState} from 'react'

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.sequencia).fill(0))

    function GerarNumerosNaoContidos(array) {
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero) ? 
            GerarNumerosNaoContidos(array): novoNumero
    }

    function GerarNumeros(){
        const novoArray = Array(props.sequencia)
            .fill(0)
            .reduce(a => [...a, GerarNumerosNaoContidos(a)],[])
            .sort((a,b) => a - b)
        setNumeros(novoArray)
    }
    
    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' - ')}</h4>
            <button onClick={GerarNumeros}>Gerar Numeros</button>
        </>
    )
}