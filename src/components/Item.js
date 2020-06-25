import React from "react"
import styled from "styled-components"

const ItemContainer = styled.div`
    border: 1px solid black;
    margin: 0;
    flex: 1;
    padding: 16px;
`

class Item extends React.Component {

    render() {

        return (            
            <ItemContainer>
                <h2>{this.props.texto}</h2>
                <p>{this.props.imagem}</p>
                <p>R$ {this.props.valor}</p>
            </ItemContainer>          
        )

      }
}

export default Item