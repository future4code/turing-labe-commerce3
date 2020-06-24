import React from 'react';
import styled from 'styled-components'

//ESTILO
const Card = styled.div`
    border: solid 1px orange;
    padding: 5px;
    margin: 0 16px;
    max-width: 25%;
`
const Imagem = styled.img`
    width: 100%;
    margin-bottom: 10px;
`
const P = styled.p`
    font-size: 2rem;
    margin-bottom: 10px;
`
const AddCarrinho = styled.button`
    width: 100%;
    padding: 4px;
    text-align: center;
    color: white;
    background: gray;
`
//COMPONENTE
export default class Itens extends React.Component {
    render(){
    return (
        <Card>
            <Imagem src={this.props.src} alt={this.props.alt}></Imagem>
            <P>{this.props.tituloItem}</P>
            <P>R$ {this.props.precoItem}</P>
            <AddCarrinho>Adicionar ao Carrinho</AddCarrinho>
        </Card>
    );
  };
};
