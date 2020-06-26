import React from "react"
import styled from "styled-components"

const ItemContainer = styled.div`
    flex: 1;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

const ItemContent = styled.div `
    width: 600px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    background-color: #ffffff;
    position: relative;
`

const ItemTitulo = styled.h2 `
    margin: 16px auto;
`

const ItemImg = styled.img `
    width: 100%;
    max-height: 400px;
    object-fit: cover;
`

const ItemValor = styled.p `
    font-weight: 700;
    text-align: center;
`

const FechaItem = styled.p `
    font-size: 1.5rem;
    font-weight: 700;
    color: #162059;
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
`

const AddCarrinho = styled.button`
    display: block;
    width: 70%;
    padding: 8px;
    text-align: center;
    font-weight: 700;
    color: #fFF;
    background: #0E3A73;
    margin: 16px auto;
    border: 0;
    outline: 0;
    border-radius: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`

class Item extends React.Component {

    render() {

        return (            
            <ItemContainer>
                <ItemContent onClick={this.props.fechaItem}>
                    <FechaItem>X</FechaItem>
                    <ItemTitulo>{this.props.texto}</ItemTitulo>
                    <ItemImg src={this.props.imagem} alt={this.props.texto}/>
                    <ItemValor>R$ {this.props.valor}</ItemValor>
                    <AddCarrinho onClick={this.props.comprar}>Comprar</AddCarrinho>
                </ItemContent>
            </ItemContainer>          
        )

      }
}

export default Item