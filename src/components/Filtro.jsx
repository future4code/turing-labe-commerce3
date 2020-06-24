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


export default props =>{
    const titulo = props.titulo || "titulo"
    const handleChange = props.handleChange || function(){};
    const arrayOptions = props.options || [] 
    const handleSelectChange = props.handleSelectChange || function(){}
    
    const Select =  <select onChange={handleSelectChange}>
                        {arrayOptions.map( (options, i, a) =>{
                             return <option value={i}>{options}</option>
                        })}
                    </select>;
    
    const Input = <ContainerInput>
                            <label>{titulo}</label>
                            <input onChange={handleChange} type={props.type}/>
                        </ContainerInput>;
    
    const show =  !props.isInput ? <>{Select}</> : <>{Input}</> 
    return (
            <>
            {show}
            </>
    );
}