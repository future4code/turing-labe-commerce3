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
  flex-wrap: wrap;
`

const FiltroContainer = styled.div `
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const FiltroTitulo = styled.h3 `
  margin: 0 8px;
`

const ItensContainer = styled.div `
  flex: 3;
  padding: 16px;
  background-color: #f5f5f5;
`

const ListItens = styled.div `
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  background-color: #ffffff;
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
  background-color: #FFFFFF;
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
        id: 123,
        texto: "Camiseta manga comprida Take me",
        imagem: "https://ordertees.net/wp-content/uploads/2019/08/Vintage-Never-Forget-Pluto-T-Shirt-Funny-Space-Graphic-Tees.jpg",
        valor: 100,
        quantidade: 1
      },
      {
        id: 1234,
        texto: "Camiseta Warning Ufo lover",
        imagem: "https://i.ebayimg.com/images/g/NXkAAOSwX61ZLqqK/s-l300.jpg",
        valor: 80,
        quantidade: 1
      },
      {
        id: 1235,
        texto: "Camiseta I need more space",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/71DLm-1N5yL._UL1500_.jpg",
        valor: 80,
        quantidade: 1
      },
      {
        id: 1236,
        texto: "Camiseta Pluto never forget",
        imagem: "https://printteestore.com/wp-content/uploads/2019/Image/636952023189511389/Vintage-Never-Forget-Pluto-Funny-Space-Graphic_Premium-T-shirt_True-Royal.JPEG",
        valor: 80,
        quantidade: 1
      },
      {
        id: 1236,
        texto: "Camiseta Pluto never forget",
        imagem: "https://printteestore.com/wp-content/uploads/2019/Image/636952023189511389/Vintage-Never-Forget-Pluto-Funny-Space-Graphic_Premium-T-shirt_True-Royal.JPEG",
        valor: 80,
        quantidade: 1
      }
    ],

    itensSelecionados: "",
    
    valorInputValorMinimo: "",
    valorInputValorMaximo: "",
    valorInputValorBusca: "",

    valorInputNovoTexto: "",
    valorInputNovoImg: "",
    valorInputNovoValor: "",

    showCadastrar: false,
    apertouBotaoCarrinho: false,
    abreCard: false,
    idItemClicado: ""
  }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasString = localStorage.getItem("tarefa");
    const tarefasObjeto = JSON.parse(tarefasString);
  };

  onChangeValorMinimo = event => {
    this.setState({valorInputValorMinimo: event.target.value})
  }

  onChangeValorMaximo = event => {
    this.setState({valorInputValorMaximo: event.target.value})
  }

  onChangeValorBusca = event => {
    this.setState({valorInputValorBusca: event.target.value})
  }

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
    this.setState({idItemClicado: id})  
  } 

  //Adiciona item ao Carrinho

  onClickSelecionaItem = id => {

    const itemSelecionado = this.state.itens.filter((item) => {
      return item.id === id
    })

    itemSelecionado.forEach( item => {
      if ( this.state.itensSelecionados.includes(item) ) {
        item.quantidade += 1
      } else {
        this.setState({ itensSelecionados: [...this.state.itensSelecionados, item] })
      }
    })

    if (!this.state.apertouBotaoCarrinho) {
      this.setState({apertouBotaoCarrinho: !this.state.apertouBotaoCarrinho})
    }
  } 

  onClickApagarItem = event => {

    const novaLista = this.state.itensSelecionados.filter( item => {
      return item.id !== Number(event.target.id)
    })

    this.setState({ itensSelecionados: novaLista })

  }
  
  onChangeOrdena = event => {
    this.state.itens.sort((a, b) => {
      if ( event.target.value == 1 ) {
        return parseFloat(a.valor) - parseFloat(b.valor);
      } else if ( event.target.value == 2 ) {
        return parseFloat(b.valor) - parseFloat(a.valor);
      }
    })
    this.setState({ itens: this.state.itens });
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

    const renderCarrinho =  (this.state.apertouBotaoCarrinho) ? <Carrinho lista={this.state.itensSelecionados} apagarItem={this.onClickApagarItem}/> : null;
    
    const itemAberto = this.state.itens.filter( item => {
      if(item.id === this.state.idItemClicado) {
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
          <HeaderTitle>LabEcommerce</HeaderTitle>
        </Header>
        <Main>
          <FiltroContainer>
            <FiltroTitulo>Filtro</FiltroTitulo>
            <Filtro isInput="true" titulo="Valor Mínimo" type="number" min="0" handleChange={this.onChangeValorMinimo}/>
            <Filtro isInput="true" titulo="Valor Máximo" type="number" max="1000" handleChange={this.onChangeValorMaximo}/>
            <Filtro isInput="true" titulo="Buscar produto"handleChange={this.onChangeValorBusca} />

          </FiltroContainer>
          <ItensContainer>
            <h2>Produtos</h2>
            <ItensHeader>
              <p>Quantidade de de Produtos: {totalItens()} </p>
              <Filtro handleSelectChange={this.onChangeOrdena} options={["Ordenar", "Ordem crescente", "Ordem decrescente"]}/>
            </ItensHeader>
            <ListItens>
              {itensFiltrados.map( (item, i, a) => {
                return <Itens handleButtonClick={() => this.onClickSelecionaItem(item.id)} handleCardClick={() => this.onClickAbrirCard(item.id)} key={item.id + i} tituloItem={item.texto} precoItem={item.valor} src={item.imagem}/>
              })}
            </ListItens>
          </ItensContainer>
          {renderItemAberto()}
          {renderCarrinho}
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
