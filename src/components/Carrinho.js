import React from "react"
import styled from "styled-components"

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    margin: 0;
    flex: 1;
    padding: 16px;
`

class Carrinho extends React.Component {

    state = {
        
    }

    render() {

        return (            
            <ContainerCarrinho>
                    <h2>Carrinho</h2>
                    <ul></ul>
                    <p>Total <b>R$: </b></p>
            </ContainerCarrinho>          
        )

      }
}

export default Carrinho