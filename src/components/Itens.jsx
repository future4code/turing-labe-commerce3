import React from 'react';
import styled from 'styled-component'

//ESTILO
const Card = styled.div`
    border: solid 1px orange;
    padding: 5px;
    width: 17%;
`
const Imagem = styled.img`
    width: 100%;
    margin-bottom: 10px;
`
const P = styled.p`
    font-size: 3rem;
    margin-bottom: 10px;
`
const AddCarrinho = styled.button`
    width: 100%;
    padding: 3px;
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
            <P>{this.props.precoItem}</P>
            <AddCarrinho>Adicionar ao Carrinho</AddCarrinho>
        </Card>
    );
  };
};
