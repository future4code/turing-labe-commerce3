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
    margin: 8px;
`

const Pinput = styled.input `
    width: 150px;
    border: none;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`

const Label = styled.label `
    font-size: 0.9rem;
    margin-bottom: 4px;
`

const SelectDiv = styled.select `
    font-size: 0.95rem;
    border: none;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`

export default props =>{
    const titulo = props.titulo || "titulo"
    const handleChange = props.handleChange || function(){};
    const arrayOptions = props.options || [] 
    const handleSelectChange = props.handleSelectChange || function(){}
    const InputType = props.type || "text"
    const minimo =  props.min || 0
    const max =  props.max || 1000
    
    const Select =  <SelectDiv onChange={handleSelectChange}>
                        {arrayOptions.map( (options, i, a) =>{
                             return <option key={i} value={i}>{options}</option>
                        })}
                    </SelectDiv>;
    
    const Input = <ContainerInput>
                            <Label>{titulo}</Label>
                            <Pinput onChange={handleChange} type={InputType} min={minimo} max={max}/>
                        </ContainerInput>;
    
    const show =  !props.isInput ? <>{Select}</> : <>{Input}</> 
    return (
            <>
                {show}
            </>
    );
}