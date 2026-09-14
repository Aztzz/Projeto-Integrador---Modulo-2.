// imports de bibliotecas
import { NavLink, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp} from "react-icons/fa";
// imports de fotos do catalogo
import Logo from './assets/texas.png'
import bota from './assets/dgobota.jpg'
import jaqueta from './assets/Jaqueta Ariat.png'
import zenz from './assets/calça zenz.webp'
import colar from './assets/Colar.png'

// imagens de banners 
import banner1 from './assets/banner.webp'
import banner2 from './assets/banner2.webp'
import banner3 from './assets/banner3.webp.png'
import banner4 from './assets/banner4.webp'

function Header (){
  return(
    <header>
      <img src= {Logo} alt="" />
    </header>
  )
}

function Nav() {
  return (
    <nav>
      <NavLink className="link" to="/">INÍCIO</NavLink>
      <NavLink className="link" to="/MASCULINO">MASCULINO</NavLink>
      <NavLink className="link" to="/FEMININO">FEMININO</NavLink>
      <NavLink className="link" to="/ACESSÓRIOS">ACESSÓRIOS</NavLink>
      <NavLink className="link" to="/BOTAS">BOTAS</NavLink>
      <NavLink className="link" to="/OFERTAS">OFERTAS</NavLink>
    </nav>
  )
}

function Carrossel() {

  const banners = [
    {
      imagem: banner1,
      titulo: "ESTILO QUE VEM DO CAMPO",
      texto: "Vista sua essência. Viva o estilo country.",
      nomeLink: "VER COLEÇÃO MASCULINA",
      link: "/MASCULINO"
    },

    {
      imagem: banner2,
      titulo: "ELEGÂNCIA COM ALMA COUNTRY",
      texto: "Estilo feminino para quem carrega o campo no coração.",
      nomeLink: "VER COLEÇÃO FEMININA",
      link: "/FEMININO"
    },

    {
      imagem: banner3,
      titulo: "PISA FORTE, VIVA COUNTRY",
      texto: "Botas feitas para acompanhar todos os seus caminhos.",
      nomeLink: "VER NOSSAS BOTAS",
      link: "/BOTAS"
    },

    {
      imagem: banner4,
      titulo: "OFERTAS DO RANCHO",
      texto: "Seu estilo country favorito por um preço especial.",
      nomeLink: "VER OFERTAS",
      link: "/OFERTAS"
    }
  ]

  const [atual, setAtual] = useState(0)


  function proxima() {
    setAtual((atual + 1) % banners.length)
  }


  function anterior() {
    if (atual === 0) {
      setAtual(banners.length - 1)
    } else {
      setAtual(atual - 1)
    }
  }


  return (
    <div className="carrossel">

      <div
      
        className="banner"
        style={{
          backgroundImage: `url(${banners[atual].imagem})`,
          backgroundPosition: `center`
        }}
      >

        <div className="conteudo-banner">

          <h1>
            {banners[atual].titulo}
          </h1>

          <p>
            {banners[atual].texto}
          </p>

          <br />

          <button
            className="seta esquerda"
            onClick={anterior}
          >
            ❮
          </button>


          <NavLink
            className="Coleção"
            to={banners[atual].link}
          >
            {banners[atual].nomeLink}
          </NavLink>


          <button
            className="seta direita"
            onClick={proxima}
          >
            ❯
          </button>

        </div>

      </div>
      <div className="bolinhas">
        {banners.map((banner, index) => (
          <span
            key={index}
            className={
              atual === index
                ? "bolinha ativa"
                : "bolinha"
            }
            onClick={() => setAtual(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

function Cardsmaisvedidos({imagem, titulo, preco, descricao, botão}){
  return(
    <>
    <div>
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <h4>{preco}</h4>
      <button>{botão}</button>
    </div>
    </>
  )
}
function Masculinoroupas({imagem, titulo, preco, descricao, botão}){
  return(
    <>
    <div>
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <h4>{preco}</h4>
      <button>{botão}</button>
    </div>
    </>
  )
}

function Masculinop(){
  return(
    <section>
      <div>
      </div>
      <div className='cards'>
        <div className='dentrodocard'>  
      <Masculinoroupas
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Masculinoroupas
      imagem={jaqueta}
      titulo='Jaqueta Ariat'
      descricao='Uma jaqueta cique e confortavel'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Masculinoroupas
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Masculinoroupas
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Masculinoroupas
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
      </div>
<NavLink className="butaodevermais" to="/VERTUDO">Ver tudo</NavLink>  
    </section>
    )
  } 
  
  function VERTUDO(){
  return(
    <main>
      <section>

        <div className='thebest'>

          <h2>TODAS AS PEÇAS MASCULINAS</h2>

          <h3>
            As melhores peças masculinas <br />
            <span className='COUNTRY'>COUNTRY</span>
          </h3>

          <section>

              <div className='cards'>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={jaqueta}
                    titulo='Jaqueta Ariat'
                    descricao='Uma jaqueta chique e confortavel'
                    preco='R$1500,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={jaqueta}
                    titulo='Jaqueta Ariat'
                    descricao='Uma jaqueta chique e confortavel'
                    preco='R$1500,00'
                    botão='Comprar agora'
                  />
                </div>
            </div>
          
            <div className='cards'>
              
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={jaqueta}
                  titulo='Jaqueta Ariat'
                  descricao='Uma jaqueta chique e confortavel'
                  preco='R$1500,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
            </div>
            <div className='cards'>
              
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={jaqueta}
                  titulo='Jaqueta Ariat'
                  descricao='Uma jaqueta chique e confortavel'
                  preco='R$1500,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
            </div>
          <div className='contadoresdepagina'>
              <NavLink className="anterior" to="/MASCULINO">❮</NavLink>

              <NavLink className="numbers1" to="/VERTUDO">1</NavLink>

              <NavLink className="numbers" to="/MASCULINOP2">2</NavLink>

              <NavLink className="proximo" to="/MASCULINOP2">❯</NavLink>
          </div>
          </section>

        </div>

      </section>
    </main>
  )
}
  function Femininor({imagem, titulo, preco, descricao}){
  return(
    <>
    <div>
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <h4>{preco}</h4>
    </div>
    </>
  )
}

function MASCULINOP2() {
  return(
    <main>
      <section>

        <div className='thebest'>

          <h2>TODAS AS PEÇAS MASCULINAS</h2>

          <h3>
            As melhores peças masculinas <br />
            <span className='COUNTRY'>COUNTRY</span>
          </h3>

              <div className='cards'>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={jaqueta}
                    titulo='Jaqueta Ariat'
                    descricao='Uma jaqueta chique e confortavel'
                    preco='R$1500,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={jaqueta}
                    titulo='Jaqueta Ariat'
                    descricao='Uma jaqueta chique e confortavel'
                    preco='R$1500,00'
                    botão='Comprar agora'
                  />
                </div>
            </div>
          
            <div className='cards'>
              
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={jaqueta}
                  titulo='Jaqueta Ariat'
                  descricao='Uma jaqueta chique e confortavel'
                  preco='R$1500,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
            </div>
            <div className='cards'>
              
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={jaqueta}
                  titulo='Jaqueta Ariat'
                  descricao='Uma jaqueta chique e confortavel'
                  preco='R$1500,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
            </div>

          <div className='contadoresdepagina'>

            <NavLink className="anterior" to="/VERTUDO">
              ❮
            </NavLink>

            <NavLink className="numbers" to="/VERTUDO">
              1
            </NavLink>

            <NavLink className="numbers2" to="/MASCULINOP2">
              2
            </NavLink>

<NavLink className="numbers" to="/MASCULINOP3">3</NavLink>

            <NavLink className="proximo" to="/MASCULINOP3">
              ❯
            </NavLink>

          </div>

        </div>

      </section>
    </main>
  )
}

function MASCULINOP3() {
  return(
    <main>
      <section>

        <div className='thebest'>

          <h2>TODAS AS PEÇAS MASCULINAS</h2>

          <h3>
            As melhores peças masculinas <br />
            <span className='COUNTRY'>COUNTRY</span>
          </h3>

                       <div className='cards'>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={jaqueta}
                    titulo='Jaqueta Ariat'
                    descricao='Uma jaqueta chique e confortavel'
                    preco='R$1500,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={bota}
                    titulo='Bota DGO'
                    descricao='Uma bota chique e confortavel'
                    preco='R$900,00'
                    botão='Comprar agora'
                  />
                </div>

                <div className='dentrodocard'>
                  <Masculinoroupas
                    imagem={jaqueta}
                    titulo='Jaqueta Ariat'
                    descricao='Uma jaqueta chique e confortavel'
                    preco='R$1500,00'
                    botão='Comprar agora'
                  />
                </div>
            </div>
          
            <div className='cards'>
              
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={jaqueta}
                  titulo='Jaqueta Ariat'
                  descricao='Uma jaqueta chique e confortavel'
                  preco='R$1500,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
            </div>
            <div className='cards'>
              
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={jaqueta}
                  titulo='Jaqueta Ariat'
                  descricao='Uma jaqueta chique e confortavel'
                  preco='R$1500,00'
                  botão='Comprar agora'
                />
              </div>

              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
              <div className='dentrodocard'>
                <Masculinoroupas
                  imagem={bota}
                  titulo='Bota DGO'
                  descricao='Uma bota chique e confortavel'
                  preco='R$900,00'
                  botão='Comprar agora'
                />
              </div>
            </div>

          <div className='contadoresdepagina'>

            <NavLink className="anterior" to="/MASCULINOP2">
              ❮
            </NavLink>

            <NavLink className="numbers" to="/VERTUDO">1</NavLink>
            <NavLink className="numbers" to="/MASCULINOP2">2</NavLink>
            <NavLink className="numbers3" to="/MASCULINOP3">3</NavLink>

          </div>

        </div>

      </section>
    </main>
  )
}

function Femininop(){
    return(
      <>
    <section>
      <div>
      </div>
      <div className='cards'>
        <div className='dentrodocard'>  
      <Femininor
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Feminior
      imagem={jaqueta}
      titulo='Jaqueta Ariat'
      descricao='Uma jaqueta cique e confortavel'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Feminior
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Feminior
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
      </div>
    </section>
      </>
    )
}

function Maisvendidos(){
  return(
    <>
    <section>
      <div>
        <h3>As peças mais vendidas da nossa loja <br />
        para vocês conhecerem</h3>
      </div>
      <div className='cards'>
        <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={zenz}
      titulo='Calça zenz'
      descricao='Calça zenz com brilhos, perfeita para rodeio'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={colar}
      titulo='Colar Country'
      descricao='Colar country Feminino de casal dourado'
      preco='R$50,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={jaqueta}
      titulo='Jaqueta Ariat'
      descricao='Uma jaqueta cique e confortavel'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
      </div>
    </section>
      </>
    )
}

function Início(){
  return(
    <>
    <main>
      <section>

        <Carrossel />
          <div className='thebest'>
        <h2>MAIS VENDIDOS</h2>
        <Maisvendidos/>
          </div>
      </section>
    </main>
    </>
  )
}

function Masculino(){
  return(
    <>
    <h3>As melhores peças masculinas <br /> <span className='COUNTRY'>COUNTRY</span></h3>

    <Masculinop/>
    </>
  )
}

function MASCULINO(){
  return(
    <>
    <main>
      <section>
        <Carrossel />
          <div className='thebest'>
        <h2>PEÇAS MASCULINAS MAIS VENDIDAS</h2>
        <Masculino/>
          </div>
      </section>
    </main>
    </>
  )
}

function Feminino(){
  return(
    <>
    <h3>As melhores peças <span className='COUNTRY'>COUNTRYS</span> femininas</h3>
    <>
    <section>
      <div>
      </div>
      <div className='cards'>
        <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={zenz}
      titulo='Calça zenz'
      descricao='Calça zenz com brilhos, perfeita para rodeio'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={colar}
      titulo='Colar Country'
      descricao='Colar country Feminino de casal dourado'
      preco='R$50,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={jaqueta}
      titulo='Jaqueta Ariat'
      descricao='Uma jaqueta cique e confortavel'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
      </div>
    </section>
      </>
    </>
  )
}
function FEMININO(){
  return(
    <>
    <main>
      <section>
        <Carrossel />
          <div className='thebest'>
        <h2>PEÇAS FEMININAS MAIS VENDIDAS</h2>
        <Feminino/>
          </div>
      </section>
    </main>
    </>
  )
}

function Acessorios(){
  return(
    <>
    <h3>As melhores peças <span className='COUNTRY'>COUNTRYS</span> para seu look</h3>
    <>
    <section>
      <div>
      </div>
      <div className='cards'>
        <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={bota}
      titulo='Bota DGO'
      descricao='Uma bota chique e confortavel'
      preco='R$900,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={zenz}
      titulo='Calça zenz'
      descricao='Calça zenz com brilhos, perfeita para rodeio'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={colar}
      titulo='Colar Country'
      descricao='Colar country Feminino de casal dourado'
      preco='R$50,00'
      botão='Comprar agora'
      />
      </div>
       <div className='dentrodocard'>  
      <Cardsmaisvedidos
      imagem={jaqueta}
      titulo='Jaqueta Ariat'
      descricao='Uma jaqueta cique e confortavel'
      preco='R$1500,00'
      botão='Comprar agora'
      />
      </div>
      </div>
    </section>
      </>
    </>)
}

function ACESSÓRIOS(){
  return(
    <main>
      <section>
        <Carrossel />
          <div className='thebest'>
        <h2>OS ACESSÓRIOS MAIS VENDIDOS</h2>
        <Acessorios/>
          </div>
      </section>
    </main>
  )
}
function BOTAS(){
  return(
    <main>
      <section>
        <Carrossel />
          <div className='thebest'>
        <h2>BOTAS MAIS VENDIDAS</h2>
        <Maisvendidos/>
          </div>
      </section>
    </main>
  )
}
function OFERTAS(){
  return(
    <main>
      <section>
        <Carrossel />
          <div className='thebest'>
        <h2>OFERTAS</h2>
        <Maisvendidos/>
          </div>
      </section>
    </main>
  )
}

function FOOTER(){
  return(
    <>
    <footer>
      <section className='footer1'>
      <aside className='tituloFooter'>
      <p className='nomeMarca'>RANCH 22</p>
      <p className='subtituloMarca'>
        COUNTRY STORE
      </p>
      </aside>
      <article className='secoes1'>
        <aside className='informacoesfooter1'>
           <NavLink className="link1" to="/SOBRE">SOBRE</NavLink>
           <NavLink className="link1" to="/CONTATO">CONTATO</NavLink>
           <NavLink className="link1" to="/TROCAS">TROCAS E DEVOLUÇOES</NavLink>
           <NavLink className="link1" to="/POLITICA">POLITICA DE PRIVACIDADE</NavLink>
        </aside>
        <aside className='logosSociais'>
          <a
    href="https://instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://wa.me/5534999998888"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

        </aside>
        <aside className='contatosFooter'>
          <p>
            (34) 99999-8888
          </p>
          <p>
            exemplotatata@gmail.com
          </p>
        </aside>
      </article>
      <article className='copyright1'>
        <small>
          © 2026 Ranch 22 Country Store
        </small>
      </article>
      </section>
    </footer>
    </>
  )
}
function SOBRE() {
  return(
    <>
    
    </>
  )
}
function CONTATO() {
  return(
    <>
    
    </>
  )
}
function TROCAS() {
  return(
    <>
    
    </>
  )
}
function POLITICA() {
  return(
    <>
    
    </>
  )
}
function App() {
  return (
    <>
      <div className="topo">
            <Header />
            <Nav/>
            
      </div>
        <Routes>
        <Route path="/" element={<Início/>} />
        <Route path="/MASCULINO" element={<MASCULINO/>} />
        <Route path="/FEMININO" element={<FEMININO/>} />
        <Route path="/ACESSÓRIOS" element={<ACESSÓRIOS/>} />
        <Route path="/BOTAS" element={<BOTAS/>} />
        <Route path="/OFERTAS" element={<OFERTAS/>} />
        <Route path="/SOBRE" element={<SOBRE/>} />
        <Route path="/CONTATO" element={<CONTATO/>} />
        <Route path="/VERTUDO" element={<VERTUDO/>} />
        <Route path="/MASCULINOP2" element={<MASCULINOP2/>}/>
        <Route path="/MASCULINOP3" element={<MASCULINOP3/>}/>
      </Routes>
      <FOOTER/>
    </>
  )
}

export default App
