import React from 'react';
import styled from 'styled-components';
import Filtro from './components/Filtro';
import Itens from './components/Itens';

import iconeCarrinho from './images/carrinho.svg';
import iconeCadastrar from './images/add.svg';

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

const ListItens = styled.div `
  margin: 16px auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const ItensHeader = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CarrinhoContainer = styled.div `
  flex: 1;
  padding: 16px;
`

const CadastrarContainer = styled.div `
  flex: 1;
  padding: 16px;
  background-color: #f5f5f5;
`

const BtnContainer = styled.div `
  position: absolute;
  bottom: 16px;
  right: 16px;
`

const BtnCarrinho = styled.button `
  width: 72px;
  height: 72px;
  padding: 8px;
  margin: 0 8px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.75);
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
        texto: "Ataxito",
        imagem: "https://media.discordapp.net/attachments/725422422043656239/725424311917084752/ataxito.jpg?width=586&height=586",
        valor: 40
      },
      {
        id: Date.now(),
        texto: "Brenham",
        imagem: "https://media.discordapp.net/attachments/725422422043656239/725424316816031794/brenham.jpg?width=586&height=586",
        valor: 80
      }
    ],
    itensSelecionados: [
      {
        id: Date.now(),
        texto: "Um produto qualquer",
        imagem: "",
        valor: 40
      },
      {
        id: Date.now(),
        texto: "Outro produto qualquer",
        imagem: "",
        valor: 80
      },
    ],
    carrinho: true,
    valorInputValorMinimo: "",
    valorInputValorMaximo: "",
    valorInputValorBusca: "",
    valorInputNovoTexto: "",
    valorInputNovoImg: "",
    valorInputNovoValor: "",

    showCadastrar: false
  }

  onChangeValorMinimo = event => {
    this.setState({valorInputValorMinimo: event.target.value})
  }

  onChangeValorMaximo = event => {
    this.setState({valorInputValorMaximo: event.target.value})
  }

  onChangeValorBusca = event => {
    this.setState({valorInputValorBusca: event.target.value})
  }


  //Filtro

  //funcao filtra por valor máximo e mostra no itens
  //funcao filtra por valor minimo e mostra no itens
  //funcao filtra por palavra e mostra no itens


  //Itens

  //funcao adiciona item
  onClickShowCadastrar = () => {
    this.setState({showCadastrar: !this.state.showCadastrar});
  }

  onChangeInputNovoTexto = event => {
    this.setState({valorInputNovoTexto: event.target.value})
  }

  onChangeInputNovoImagem = event => {
    this.setState({valorInputNovoImg: event.target.value})
  }

  onChangeInputNovoValor = event => {
    this.setState({valorInputNovoValor: event.target.value})
  }

  onClickCadastraNovoItem = () => {
    const novoItem = {
      id: Date.now(),
      texto: this.state.valorInputNovoTexto,
      imagem: this.state.valorInputNovoImg,
      valor: this.state.valorInputNovoValor
    }

    const novalistaItens = [...this.state.itens, novoItem];
    this.setState({ itens: novalistaItens, id:"", texto:"", imagem:"", valor:"", valorInputNovoTexto:"", valorInputNovoImg:"", valorInputNovoValor:"" })
  }

  //Carrinho

  //condicional mostra carrinho
  // funcao quando clica no carrinho, acrescenta a uma lista de selecionado, para somar depois
  //funcao calcula valor total


  render() {

    const itensFiltrados = this.state.itens.filter( item => item.valor > this.state.valorInputValorMinimo ? item.texto : null);

    const totalItens = () => {
      if(this.itensFiltrados) {
        const total = this.itensFiltrados.reduce( (current, item, idx, array) => {
          return array.length
        })
        if (this.state.itens === "[]") {
          return "0";
        } 
        else {
          return total;
        }
      } else {
        return "0"
      }
    };

    const valorTotal = () => {
      const total = this.state.itensSelecionados.reduce( (current, item) => {
        return current + item.valor
      }, 0)
      if (this.state.itens === "[]") {
        return "0";
      } 
      else {
        return total;
      }
    }

    const cadastroNovoProduto = () => {
      if (this.state.showCadastrar) {
        return (
          <CadastrarContainer>
            <div>
              <h2>Acrescentar novo item</h2>
              <input value={this.state.valorInputNovoTexto} placeholder="produto" onChange={this.onChangeInputNovoTexto}></input>
              <input value={this.state.valorInputNovoImg} placeholder="link da imagem do produto" onChange={this.onChangeInputNovoImagem}></input>
              <input value={this.state.valorInputNovoValor} placeholder="valor do produto" type="number" onChange={this.onChangeInputNovoValor}></input>
              <button onClick={this.onClickCadastraNovoItem}>Cadastrar</button>
            </div>
          </CadastrarContainer>
        )
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
            <Filtro isInput="true" titulo="Valor Mínimo" type="number" min="0" handleChange={this.onChangeValorMinimo}/>
            <Filtro isInput="true" titulo="Valor Máximo" type="number" max="1000" handleChange={this.onChangeValorMaximo}/>
            <Filtro isInput="true" titulo="Burcas produto"handleChange={this.onChangeValorBusca} />

          </FiltroContainer>
          <ItensContainer>
            <h2>Produtos</h2>
            <ItensHeader>
              <p>Quantidade de de Produtos: {totalItens()} </p>
              <Filtro options={["Ordem crescente", "Ordem decrescente"]}/>
            </ItensHeader>
            <ListItens>
              {itensFiltrados.map( item => {
                return <Itens key={item.id} tituloItem={item.texto} precoItem={item.valor} src={item.imagem}/>
              })}
            </ListItens>
          </ItensContainer>
          <CarrinhoContainer>
            <h2>Carrinho</h2>
            <p>Valor total: R${valorTotal()} </p>

          </CarrinhoContainer>
          {cadastroNovoProduto()}
          <BtnContainer>
            <BtnCarrinho onClick={this.onClickShowCadastrar}>
              <Icone src={iconeCadastrar} alt="icone carrinho"/>
            </BtnCarrinho>
            <BtnCarrinho>
              <Icone src={iconeCarrinho} alt="icone carrinho"/>
            </BtnCarrinho>
          </BtnContainer>
        </Main>
      </Home>
    );
  }
}

export default App;
