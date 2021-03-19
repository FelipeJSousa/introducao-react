import React from 'react'
import './card.css'

export default props =>
    <div className="Card" style={{borderColor: props.backgroundColor || '#000'}}>
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer" style={{backgroundColor: props.backgroundColor || '#000'}}>
            {props.titulo}
        </div>
    </div>
