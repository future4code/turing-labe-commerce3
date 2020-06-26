import React from 'react';
import styled from 'styled-components'

//ESTILO
const Card = styled.div`
    border-radius: 20px;
    padding: 16px;
    margin: 16px;
    width: calc(100%/5 - 64px);
    background: white;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    text-align: center;

    @media screen and (max-width: 400px) {
        width: 100%;
    }

    @media screen and (min-width: 401px) and (max-width: 800px) {
        width: calc(100%/3 - 64px);
    }

    @media screen and (min-width: 801px) and (max-width: 1280px) {
        width: calc(100%/4 - 64px);
    }
`
const Imagem = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 8px;
    cursor: pointer;
`
const ItemTitulo = styled.h4`
    font-size: 1.15rem;
    margin-top: 0;
    margin-bottom: 8px;
    cursor: pointer;
`
const ItemTexto = styled.p`
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 8px;
`
const AddCarrinho = styled.button`
    width: 70%;
    padding: 8px;
    text-align: center;
    font-weight: 700;
    color: #fFF;
    background: #0E3A73;
    margin: 16px 0;
    border: 0;
    outline: 0;
    border-radius: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`
//COMPONENTE
export default props => {
    
    return(
        <Card>
            <Imagem id={props.id} onClick={props.handleCardClick} src={props.src} alt={props.alt}></Imagem>
            <ItemTitulo id={props.id} onClick={props.handleCardClick}>{props.tituloItem} </ItemTitulo>
            <ItemTexto id={props.id} onClick={props.handleCardClick}>R$ {props.precoItem}</ItemTexto>
            <AddCarrinho onClick={props.handleButtonClick}>Comprar</AddCarrinho>
        </Card>
    );
};

