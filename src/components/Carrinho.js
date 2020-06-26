import React from "react"
import styled from "styled-components"

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    margin: 0;
    flex: 1;
    padding: 16px;
`
let resultadoTotal = 0

class Carrinho extends React.Component {

    state = {
        resultado: 0,
        itens: this.props.lista || [],
    }

    componentDidMount () {   

        this.state.itens.forEach ((item) => {
        resultadoTotal += item.quantidade * item.valor        
        })

        this.setState({resultado: resultadoTotal})

    }

    render() {
  
    
        return (            
            <ContainerCarrinho>
                <h2>Carrinho</h2>
                <ul>
                    {this.state.itens.map ((item) =>   {
                        return  (
                            <li key={item.id}>{item.quantidade}x {item.texto} <button id={item.id} quantidade={item.quantidade} onClick={this.props.apagarItem}>Apagar</button></li>
                        )
                    })} 
                </ul>
                <p>Total <b>R$ {this.state.resultado}</b></p>
            </ContainerCarrinho>          
        )

      }
}

export default Carrinho