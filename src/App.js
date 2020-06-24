import React from 'react';
import styled from 'styled-components';

import iconeCarrinho from './images/carrinho.svg';

const Home = styled.div `
  position: relative;
`
const Header = styled.div `
  padding: 16px 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`

const HeaderTitle = styled.h1 `
  text-align: center;
`

const Main = styled.div `
  min-height: calc(100vh - 128px);
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`

const FiltroContainer = styled.div `
  flex: 1;
  padding: 16px;
`

const ItensContainer = styled.div `
  flex: 3;
  padding: 16px;
  background-color: #f5f5f5;
`

const CarrinhoContainer = styled.div `
  flex: 1;
  padding: 16px;
`

const BtnCarrinho = styled.button `
  width: 72px;
  height: 72px;
  padding: 8px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.75);
  position: absolute;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`

const Icone = styled.img `
  height: 40px;
`

class App extends React.Component {

  state = {
    itens: [
      {
        id: Date.now(),
        texto: "Um produto qualquer",
        valor: 40
      },
      {
        id: Date.now(),
        texto: "Outro produto qualquer",
        valor: 80
      }
    ],
    itensSelecionados: [
      {
        id: Date.now(),
        texto: "Um produto qualquer",
        valor: 40
      },
      {
        id: Date.now(),
        texto: "Outro produto qualquer",
        valor: 80
      },
    ],
    carrinho: true,
    valorInputValorMaximo: "",
    valorInputValorMinimo: "",
    valorInputValorBusca: "",
  }

  //Filtro

  //funcao filtra por valor máximo e mostra no itens
  //funcao filtra por valor minimo e mostra no itens
  //funcao filtra por palavra e mostra no itens


  //Itens

  //funcao adiciona item


  //Carrinho

  //condicional mostra carrinho
  // funcao quando clica no carrinho, acrescenta a uma lista de selecionado, para somar depois
  //funcao calcula valor total


  render() {
    const totalItens = () => {
      const total = this.state.itens.reduce( (current, item, idx, array) => {
        return array.length
      })
      if (this.state.itens === "[]") {
        return "0";
      } 
      else {
        return total;
      }
    }

    const valorTotal = () => {
      const total = this.state.itensSelecionados.reduce( (current, item) => {
        console.log(current)
        return current + item.valor
      }, 0)
      if (this.state.itens === "[]") {
        return "0";
      } 
      else {
        return total;
      }
    }

    return (
      <Home>
        <Header>
          <HeaderTitle>Labecommerce</HeaderTitle>
        </Header>
        <Main>
          <FiltroContainer>
            <h2>Filtro</h2>

          </FiltroContainer>
          <ItensContainer>
            <h2>Produtos</h2>
            <p>Quantidade de de Produtos: {totalItens()} </p>
            {this.state.itens.map( item => {
              return <div key={item.id}>
                <p>{item.texto}</p>
                <p>{item.valor}</p>
              </div>
            })}
          </ItensContainer>
          <CarrinhoContainer>
            <h2>Carrinho</h2>
            <p>Valor total: R${valorTotal()} </p>

          </CarrinhoContainer>
          <BtnCarrinho>
            <Icone src={iconeCarrinho} alt="icone carrinho"/>
          </BtnCarrinho>
        </Main>
      </Home>
    );
  }
}

export default App;
