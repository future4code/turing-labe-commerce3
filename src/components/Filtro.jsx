/*
    TODOAS AS PROPS SÃO OPCIONAIS
    Props list: typeInput, handleChange, options, titulo

*/

import React from "react"
import styled from "styled-components"

const ContainerInput = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
`;

const Pinput = styled.input`
        width: 150px;
`;

export default props =>{
    const titulo = props.titulo || "titulo"
    const handleChange = props.handleChange || function(){};
    const arrayOptions = props.options || [] 
    const handleSelectChange = props.handleSelectChange || function(){}
    const InputType = props.type || "text"
    const minimo =  props.min || 0
    const max =  props.max || 1000
    
    const Select =  <select onChange={handleSelectChange}>
                        {arrayOptions.map( (options, i, a) =>{
                             return <option key={i} value={i}>{options}</option>
                        })}
                    </select>;
    
    const Input = <ContainerInput>
                            <label>{titulo}</label>
                            <Pinput onChange={handleChange} type={InputType} min={minimo} max={max}/>
                        </ContainerInput>;
    
    const show =  !props.isInput ? <>{Select}</> : <>{Input}</> 
    return (
            <>
                {show}
            </>
    );
}