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
export default class Itens extends React.Component {
    render(){
    return (
        <Card>
            <Imagem src={this.props.src} alt={this.props.alt}></Imagem>
            <P>{this.props.tituloItem}</P>
            <P>R$ {this.props.precoItem}</P>
            <AddCarrinho onClick={this.props.adiciona}>Adicionar ao Carrinho</AddCarrinho>
        </Card>
    );
  };
};
