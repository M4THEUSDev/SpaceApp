import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"


// componente styled 
const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh; // QUERO NO MINÍMO 100% do que tem disponivel na tela
`

function App() { 

  return (
    <FundoGradiente>
       <EstilosGlobais />
       <Cabecalho />
       <BarraLateral />
    </FundoGradiente>
  )
}

export default App
