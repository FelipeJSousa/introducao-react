import React from 'react'

export default (props)=>{

    // function acao() {
        //     props.OnClick(Math.random(), 'Fim!');
        // }
        const num = 0
    
    return (<div>
        <button onClick={() => 
            {
                props.OnClick(props.numero + 1,"Epa! Numero Alterado! ")
            }
        }>Incrementar</button>
    </div>)
}