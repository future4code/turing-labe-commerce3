import React from 'react';
import styled from 'styled-components';
import Filtro from './components/Filtro';
import Itens from './components/Itens';
import Carrinho from './components/Carrinho';
import Item from './components/Item';

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
        valor: 40,
        quatidade: 0
      },
      {
        id: Date.now(),
        texto: "Brenham",
        imagem: "https://media.discordapp.net/attachments/725422422043656239/725424316816031794/brenham.jpg?width=586&height=586",
        valor: 80,
        quantidade: 0
      }
    ],
    
    valorInputValorMinimo: "",
    valorInputValorMaximo: "",
    valorInputValorBusca: "",

    valorInputNovoTexto: "",
    valorInputNovoImg: "",
    valorInputNovoValor: "",

    showCadastrar: false,
    apertouBotaoCarrinho: false,
    abreCard: false
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

  //Abre Carrinho
  onClickAbrirCarrinho = () => {
    this.setState({apertouBotaoCarrinho: !this.state.apertouBotaoCarrinho})
  } 

  //Abre Card

  onClickAbrirCard = id => {
    this.setState({abreCard: !this.state.abreCard})
  } 


  render() {

    const itensFiltrados = this.state.itens.filter( item => {
      const texto = item.texto.toLowerCase();
      if (this.state.valorInputValorMinimo !== "" && this.state.valorInputValorMaximo !== "" && this.state.valorInputValorBusca !== "" ) {
        return item.valor >= this.state.valorInputValorMinimo && item.valor <= this.state.valorInputValorMaximo && texto.includes(this.state.valorInputValorBusca)
      } else if (this.state.valorInputValorMinimo !== "") {
        return item.valor >= this.state.valorInputValorMinimo 
      } else if (this.state.valorInputValorMaximo !== "") {
        return item.valor <= this.state.valorInputValorMaximo
      } else if (this.state.valorInputValorBusca !== "") {
        return texto.includes(this.state.valorInputValorBusca)
      } else if (this.state.valorInputValorMinimo === "" && this.state.valorInputValorMaximo === "" && this.state.valorInputValorBusca === "" ) {
        return item.texto;
      }
    });

    const totalItens = () => {
      let total = 0;
      itensFiltrados.forEach((item, i) => {
        total = 1;
        total += i;
      })

      return total;

    };
    
    const renderCarrinho = () => {
      if (this.state.apertouBotaoCarrinho) {
        return <Carrinho />
      } 
    }
    
    const itemAberto = this.state.itens.filter( item => {
      if(item.texto === "Ataxito") {
        return item.texto
      }
    });

    const renderItemAberto = () => {
      if(this.state.abreCard) {
        const item = itemAberto.map( (item, i, a) => {
          return <Item key={item.id} texto={item.texto} imagem={item.imagem} valor={item.valor} />
        })
        return item;
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
            <Filtro isInput="true" titulo="Buscar produto"handleChange={this.onChangeValorBusca} />

          </FiltroContainer>
          <ItensContainer>
            <h2>Produtos</h2>
            <ItensHeader>
              <p>Quantidade de de Produtos: {totalItens()} </p>
              <Filtro options={["Ordem crescente", "Ordem decrescente"]}/>
            </ItensHeader>
            <ListItens>
              {itensFiltrados.map( (item, i, a) => {
                return <Itens handleCardClick={() => this.onClickAbrirCard(item.id)} key={item.id + i} tituloItem={item.texto} precoItem={item.valor} src={item.imagem}/>
              })}
            </ListItens>
          </ItensContainer>
          {/* <div>
            {itemAberto.map( (item, i, a) => {
              return <Item texto={item.texto} imagem={item.imagem} valor={item.valor} />
            })}
          </div> */}
          {renderItemAberto()}
          {renderCarrinho()}
          {/* <CarrinhoContainer>
            <h2>Carrinho</h2>
            <p>Valor total: R${valorTotal()} </p>
            {}

          </CarrinhoContainer> */}
          {cadastroNovoProduto()}
          <BtnContainer>
            <BtnCarrinho onClick={this.onClickShowCadastrar}>
              <Icone src={iconeCadastrar} alt="icone carrinho"/>
            </BtnCarrinho>
            <BtnCarrinho onClick={this.onClickAbrirCarrinho} >
              <Icone src={iconeCarrinho} alt="icone carrinho"/>
            </BtnCarrinho>
          </BtnContainer>
        </Main>
      </Home>
    );
  }
}

export default App;
