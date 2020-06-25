import React from 'react';
import styled from 'styled-components'

//ESTILO
const Card = styled.div`
    border-radius: 20px;
    padding: 5px;
    margin: 0 16px;
    max-width: 19.5%;
    background: white;
    box-shadow: 2px 2px 5px gray;
    text-align: center;
`
const Imagem = styled.img`
    width: 100%;
`
const P = styled.p`
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 4px;
`
const AddCarrinho = styled.button`
    width: 70%;
    padding: 8px;
    text-align: center;
    color: white;
    background: gray;
    margin-bottom: 20px;
    border: 0;
    outline: 0;
    border-radius: 8px;
    box-shadow: 1px 1px 2px black;
`
//COMPONENTE
export default props => {
    
    return(
        <Card onClick={props.handleCardClick}>
            <Imagem onClick={props.handleCardClick} src={props.src} alt={props.alt}></Imagem>
            <P onClick={props.handleCardClick}>{props.tituloItem} </P>
            <P onClick={props.handleCardClick}>R$ {props.precoItem}</P>
            <AddCarrinho onClick={props.handleButtonClick}>Adicionar ao Carrinho</AddCarrinho>
        </Card>
    );
};

