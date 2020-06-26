import React from "react"
import styled from "styled-components"
import iconeExcluir from '../images/excluir.svg'


const ListaCarrinho = styled.li`
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

class Carrinho extends React.Component {

    state = {
        item: this.props.item || [],
    }

    componentDidMount () {   


    }
    
    render() {

        return ( 

            <ListaCarrinho key={this.state.item.id}>
                {this.state.item.quantidade}x {this.state.item.texto}
                <BotaoExcluir id={this.state.item.id} onClick={this.state.item.apagarItem}>
                    <Icone id={this.state.item.id} onClick={this.props.apagarItem} src={iconeExcluir} alt="icone excluir"/>
                </BotaoExcluir>
            </ListaCarrinho>
        
        )

      }
}

export default Carrinho