import React from "react"
import styled from "styled-components"
import Carrinho from './Carrinho'
import ImagemCarrinho from '../imagens/car.png'

const BotaoCarrinho = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
`
class AbreCarrinho extends React.Component {

    state = {
        apertouBotaoCarrinho: false
    }

    onClickAbrirCarrinho = () => {
       this.setState({apertouBotaoCarrinho: !this.state.apertouBotaoCarrinho})
    } 

    render() {

        const renderCarrinho = () => {
            if (this.state.apertouBotaoCarrinho) {
                return <Carrinho />
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