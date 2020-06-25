import React from "react"
import styled from "styled-components"
import Carrinho from './Carrinho'

const BotaoCarrinho = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
`
class AbreCarrinho extends React.Component {

    state = {
        apertouBotaoCarrinho: false
    }

    

    render() {

        const renderCarrinho = () => {
            if (this.state.apertouBotaoCarrinho) {
                return <Carrinho 
                        lista = {this.props.lista} 
                        />
            } 
        }

        return (            
            <div>
                {renderCarrinho()} 
                <BotaoCarrinho onClick={this.onClickAbrirCarrinho}>CARRINHO</BotaoCarrinho>
            </div>
        )

      }
}

export default AbreCarrinho