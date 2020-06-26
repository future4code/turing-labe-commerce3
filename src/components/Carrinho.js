import React from "react"
import styled from "styled-components"
import iconeExcluir from '../images/excluir.svg'

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    margin: 0;
    flex: 1;
    padding: 16px;
`

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

let resultadoTotal = 0

class Carrinho extends React.Component {

    state = {
        resultado: 0,
        itens: this.props.lista || []
    }

    componentDidMount () {   

        this.state.itens.forEach ((item) => {
        resultadoTotal += item.quantidade * item.valor        
        })

        this.setState({resultado: resultadoTotal})

        this.setState({itens: this.state.itens})
        
    }
    
    render() {
            
        return (            
            <ContainerCarrinho>
                <h2>Carrinho</h2>
                <ul>
                    {this.state.itens.map ((item) =>   {
                        return  (
                            <ListaCarrinho key={item.id}>{item.quantidade}x {item.texto} <BotaoExcluir id={item.id} onClick={this.props.apagarItem}><Icone src={iconeExcluir} alt="icone excluir"/></BotaoExcluir></ListaCarrinho>
                        )
                    })} 
                </ul>
                <p>Total <b>R$ {this.state.resultado}</b></p>
            </ContainerCarrinho>          
        )

      }
}

export default Carrinho