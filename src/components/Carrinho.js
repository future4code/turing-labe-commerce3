import React from "react"
import styled from "styled-components"

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    margin: 0;
    width: 30vw;   
    min-height: 100vh;
    position: absolute;
    right: 0;
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