import React from 'react';
import './Option.css';
const Option = ({option , clicked})=>(
    <button className='option' onClick={()=>clicked(option.id)}>{option.text}</button>
)

export default Option;