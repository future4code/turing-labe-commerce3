import React from "react"
import styled from "styled-components"
import iconeExcluir from '../images/excluir.svg'


const ItensCarrinho = styled.li`
    width: 100%;
    list-style: none;
    border-top: 1px dashed black;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    padding: 5px;
`

const BotaoExcluir = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px;
`

const Icone = styled.img `
  height: 20px;
  width: 20px;
`

class ListaCarrinho extends React.Component {

    render() {
        return ( 
           <ItensCarrinho key={this.props.id}>
                {this.props.quantidade}x {this.props.texto}
                <BotaoExcluir id={this.props.id} onClick={this.props.apagarItem}>
                    <Icone id={this.props.id} onClick={this.props.apagarItem} src={iconeExcluir} alt="icone excluir"/>
                </BotaoExcluir>
            </ItensCarrinho>
        )
      }
}

export default ListaCarrinho