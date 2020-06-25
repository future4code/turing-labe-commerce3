import React from "react"
import styled from "styled-components"
import AbreCarrinho from "./AbreCarrinho"

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    margin: 0;
    flex: 1;
    padding: 16px;
`
let resultadoTotal = 0

class Carrinho extends React.Component {

    componentDidMount () {   

        this.state.itens.forEach ((item) => {
        resultadoTotal += item.quantidade * item.valor        
        })

        this.setState({resultado: resultadoTotal}) 
    }

    state = {
        resultado: 0,
        itens: this.props.lista
    }
  
    apagarItem = (ItemId) => {

        const novaListaDoCarrinho = this.state.itens.map((item) => {
            if (ItemId === item.id) {

                const novoItem = {
                    ...item,
                    quantidade: 0
                }
             
                return novoItem

            } else {
                return item
              }
        })

        this.setState({itens: novaListaDoCarrinho})

        const novaListaDoCarrinho2 = this.state.itens.filter((item) => {
            return (ItemId !== item.id)
        })

        this.setState({itens: novaListaDoCarrinho2})

        this.state.itens.forEach ((item) => {
        console.log(item.quantidade, item.valor)
        if (ItemId === item.id) {
            resultadoTotal -= item.quantidade * item.valor   
        }     
        })

        this.setState({resultado: resultadoTotal})

        

    }   

    render() {

        const carrinhoNaTela = this.state.itens.map ((item) =>   {           
            return  (
                <li key={item.id}>{item.quantidade}x {item.texto} <button onClick={() => this.apagarItem(item.id)}>Apagar</button></li> 
            )
        }) 

        return (            
            <ContainerCarrinho>
                <h2>Carrinho</h2>
                <ul>
                    {carrinhoNaTela} 
                </ul>
                <p>Total <b>R$ {this.state.resultado}</b></p>
            </ContainerCarrinho>          
        )

      }
}

export default Carrinho