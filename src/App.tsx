import { Introduction } from './components/Introduction'
import { Projects } from './components/Projects'
import { Container } from './styles/app.style'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Container>
        <Introduction />
        <Projects />
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
