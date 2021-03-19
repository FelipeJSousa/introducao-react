import React from 'react'
import Filho from './Filho'
export default props =>
<div>
    <Filho sobrenome="Sousa"><strong>Felipe</strong></Filho>
    <Filho {...props}>Isadora</Filho>
    <Filho sobrenome= {"Sousa " + props.sobrenome}>Aurora</Filho>
</div>