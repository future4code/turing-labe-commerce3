import React from 'react';
import styled from 'styled-components';
import Filtro from './components/Filtro';
import Itens from './components/Itens';
import ListaCarrinho from './components/ListaCarrinho';
import Item from './components/Item';

import iconeCarrinho from './images/carrinho.svg';
import fundo from './images/fundo.png';

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

const TituloSecundario = styled.h2 `
  font-size: 2rem;
  margin: 16px 0;
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
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
`

const ListItens = styled.div `
  margin: auto;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const ItensHeader = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContainerCarrinho = styled.div `
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`

const BtnContainer = styled.div `
  position: fixed;
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

const Btn = styled.button `
  display: block;
  width: 70%;
  padding: 8px;
  text-align: center;
  font-weight: 700;
  color: #fFF;
  background: #BF1304;
  margin: 16px auto;
  border: 0;
  outline: 0;
  border-radius: 8px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`

class App extends React.Component {

  state = {
    itens: [
      {
        id: 1233,
        texto: "Camiseta manga comprida Take me",
        imagem: "https://i.pinimg.com/736x/e0/5c/ca/e05cca96efc7ea4532785b03c156f2f1.jpg",
        valor: 89,
        quantidade: 1
      },
      {
        id: 1234,
        texto: "Camiseta Warning Ufo lover",
        imagem: "https://i.ebayimg.com/images/g/NXkAAOSwX61ZLqqK/s-l300.jpg",
        valor: 49,
        quantidade: 1
      },
      {
        id: 1235,
        texto: "Camiseta I need more space",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/71DLm-1N5yL._UL1500_.jpg",
        valor: 79,
        quantidade: 1
      },
      {
        id: 1236,
        texto: "Camiseta Pluto never forget",
        imagem: "https://printteestore.com/wp-content/uploads/2019/Image/636952023189511389/Vintage-Never-Forget-Pluto-Funny-Space-Graphic_Premium-T-shirt_True-Royal.JPEG",
        valor: 79,
        quantidade: 1
      },
      {
        id: 1237,
        texto: "Camiseta Gravity brings me down",
        imagem: "https://i.rocdn.com/v2/30074984?w=1024&h=1024",
        valor: 89,
        quantidade: 1
      },
      {
        id: 1238,
        texto: "Camiseta manga comprida Take me",
        imagem: "https://cdn.tees.design/uploads/2019/04/16093720/Get-Now-Alien-Reading-English-Teacher-Library-Space-Funny-T-shirt-Black-Long-Sleeve.png",
        valor: 59,
        quantidade: 1
      },
      {
        id: 1239,
        texto: "Aliens don't believe",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/71F7ZarihiL._AC_UL1500_.jpg",
        valor: 59,
        quantidade: 1
      },
      {
        id: 1240,
        texto: "Humans aren't real",
        imagem: "https://ak1.ostkcdn.com/images/products/is/images/direct/271e39b7cf15e54bdac5e70a693279c36c812762/Humans-Aren%27t-Real-Alien-Men%27s-Funny-T-Shirt-Humorous-Tee-Cute-Graphic-Tshirt-Funny-Shirt.jpg",
        valor: 49,
        quantidade: 1
      },
      {
        id: 1241,
        texto: "Camiseta Slothstronaut",
        imagem: "https://donefashion.com/wp-content/uploads/2019/09/Slothstronaut-Sloth-Astronaut-Funny-Space-Pun-Gift-Tshirts.jpg",
        valor: 49,
        quantidade: 1
      },
      {
        id: 1242,
        texto: "Camiseta You are here",
        imagem: "https://cdn1.bigcommerce.com/server4100/deb25/products/156/images/436/you_are_here_space_geek_t_shirt__93336.1350679459.400.400.jpg?c=2",
        valor: 39,
        quantidade: 1
      }
    ],

    itensSelecionados: [],
    
    inputValorMinimo: "",
    inputValorMaximo: "",
    inputBuscar: "",

    apertouBotaoCarrinho: false,
    abreCard: false,
    idItemClicado: "",

    ordem: 0
  }

  componentDidUpdate() {
    localStorage.setItem("itens", JSON.stringify(this.state.itensSelecionados))
  };

  componentDidMount() {
    localStorage.getItem("itens") && this.setState({ itensSelecionados: JSON.parse(localStorage.getItem("itens")) });
  };

  onChangeValorMinimo = event => {
    this.setState({inputValorMinimo: event.target.value})
  }

  onChangeValorMaximo = event => {
    this.setState({inputValorMaximo: event.target.value})
  }

  onChangeValorBusca = event => {
    this.setState({inputBuscar: event.target.value})
  }

  onClickAbrirCard = id => {
    this.setState({abreCard: !this.state.abreCard})  
    this.setState({idItemClicado: id})  
  }

  onClickAbrirCarrinho = () => {
    this.setState({apertouBotaoCarrinho: !this.state.apertouBotaoCarrinho})
  } 

  renderCarrinho =  () => {

    let resultado = 0;
    
    this.state.itensSelecionados.forEach( item => {
      if ( item ) {
        resultado += (item.valor * item.quantidade)
      }
    })

    return (
        <ContainerCarrinho>
          <TituloSecundario>Carrinho</TituloSecundario>

          {this.state.itensSelecionados.map( item => {
            if ( item.quantidade > 0 ) {
              return <ListaCarrinho key={item.id} id={item.id} texto={item.texto} quantidade={item.quantidade} apagarItem={this.onClickApagarItem}/>
            }

          })}

          <p><strong>R$ {resultado}</strong></p>
          <Btn onClick={this.onClickLimpaCarrinho}>Limpar carrinho</Btn>
        </ContainerCarrinho>
    )
  }

  onClickSelecionaItem = id => {

    const itemSelecionado = this.state.itens.find( item => {
      return item.id === id
    })

    const posicaoDoItemNoCarrinho = this.state.itensSelecionados.findIndex( item => {
      return item.id === id
    });

    const existeNoCarrinho = posicaoDoItemNoCarrinho > -1

    let novosItensSelecionados = [...this.state.itensSelecionados]

    if ( existeNoCarrinho ) {
      novosItensSelecionados = novosItensSelecionados.map( item => {
        if ( item.id === id ) {
          return {
            ...item,
            quantidade: item.quantidade + 1
          }
        }
        
        return item
      })

    } else {
      novosItensSelecionados.push(itemSelecionado)
    }

    this.setState({ itensSelecionados: novosItensSelecionados })

    if (!this.state.apertouBotaoCarrinho) {
      this.setState({ apertouBotaoCarrinho: !this.state.apertouBotaoCarrinho })
    }
  } 

  onClickApagarItem = event => {

    const id = Number(event.target.id)

    let novosItensSelecionados = [...this.state.itensSelecionados]

    novosItensSelecionados = novosItensSelecionados.map( item => {
      if ( item.quantidade > 1 ) {
        if ( item.id === id ) {
          return {
            ...item,
            quantidade: item.quantidade - 1
          }
        }
        return item
      } else {
        if ( item.id === id ) {
          return item.id !== id
        }
        return item
      }
    })

    this.setState({ itensSelecionados: novosItensSelecionados })
    
    if (!this.state.apertouBotaoCarrinho) {
      this.setState({ apertouBotaoCarrinho: !this.state.apertouBotaoCarrinho })
    }

  }
  
  onClickLimpaCarrinho = () => {
    if( window.confirm("Você tem certeza de que deseja cancelar todas as compras?")) {
      this.setState({ itensSelecionados: [] })
    }
  }

  onChangeOrdenaLista = event => {

    let listaOrdenada = [];


    if ( Number(event.target.value) === 1 ) {
      listaOrdenada = [...this.state.itens];
      listaOrdenada.sort ((a, b) => {
        return a.valor - b.valor;
      })
    }
    
    if ( Number(event.target.value) === 2 ) {
      listaOrdenada = [];
      listaOrdenada = [...this.state.itens];

      listaOrdenada.sort ((b, a) => {
        return a.valor - b.valor;
      })
    }
    
    this.setState({ itens: listaOrdenada })
  }

  render() {


    let itensFiltrados = this.state.itens;
    
    if ( this.state.inputValorMinimo !== "" ) {
      itensFiltrados = this.state.itens.filter( item => item.valor >= this.state.inputValorMinimo ?  item : null)
    }
    
    if ( this.state.inputValorMaximo !== "" ) {
      itensFiltrados = this.state.itens.filter( item => item.valor <= this.state.inputValorMaximo ?  item : null)
    }
    
    if ( this.state.inputBuscar !== "" ) {
      itensFiltrados = this.state.itens.filter( item => {
        const texto = item.texto.toLocaleLowerCase();
        if ( texto.includes(this.state.inputBuscar) ) {
          return item
        }
      })
    }
    
    if ( this.state.inputValorMinimo !== "" && this.state.inputValorMaximo !== "" ) {
      itensFiltrados = this.state.itens.filter( item => {
        if ( item.valor >= this.state.inputValorMinimo && item.valor <= this.state.inputValorMaximo) {
          return item
        }
      })
    }

    if ( this.state.inputValorMinimo !== "" &&  this.state.inputBuscar !== "" ) {
      itensFiltrados = this.state.itens.filter( item => {
        const texto = item.texto.toLocaleLowerCase();
        if ( item.valor >= this.state.inputValorMinimo && texto.includes(this.state.inputBuscar) ) {
          return item
        }
      })
    }

    if ( this.state.inputValorMaximo !== "" &&  this.state.inputBuscar !== "" ) {
      itensFiltrados = this.state.itens.filter( item => {
        const texto = item.texto.toLocaleLowerCase();
        if ( item.valor <= this.state.inputValorMaximo && texto.includes(this.state.inputBuscar) ) {
          return item
        }
      })
    }

    if ( this.state.inputValorMinimo !== "" && this.state.inputValorMaximo !== "" &&  this.state.inputBuscar !== "" ) {
      itensFiltrados = this.state.itens.filter( item => {
        const texto = item.texto.toLocaleLowerCase();
        if ( item.valor >= this.state.inputValorMinimo && item.valor <= this.state.inputValorMaximo && texto.includes(this.state.inputBuscar) ) {
          return item
        }
      })
    }
  

    const renderItemAberto = () => {
      const itemAberto = this.state.itens.find( item => item.id === this.state.idItemClicado);
      return <Item comprar={() => this.onClickSelecionaItem(itemAberto.id)} fechaItem={this.onClickAbrirCard} key={itemAberto.id} texto={itemAberto.texto} imagem={itemAberto.imagem} valor={itemAberto.valor} />;
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
            <Filtro isInput="true" titulo="Buscar produto" handleChange={this.onChangeValorBusca} />
          </FiltroContainer>
          <ItensContainer>
            <TituloSecundario>Produtos</TituloSecundario>
            <ItensHeader>
              <p>Quantidade de de Produtos: {itensFiltrados.length} </p>
              <Filtro handleSelectChange={this.onChangeOrdenaLista} options={["Ordem", "Ordem crescente", "Ordem decrescente"]}/>
            </ItensHeader>
            <ListItens>
              {itensFiltrados.map( (item, i, a) => {
                return <Itens handleButtonClick={() => this.onClickSelecionaItem(item.id)} handleCardClick={() => this.onClickAbrirCard(item.id)} key={item.id} tituloItem={item.texto} precoItem={item.valor} src={item.imagem}/>
              })}
            </ListItens>
          </ItensContainer>
          {this.state.apertouBotaoCarrinho && this.renderCarrinho()}
          {this.state.abreCard && renderItemAberto()}
          <BtnContainer>
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
