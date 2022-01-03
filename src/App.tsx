import { useState } from 'react'
import { Introduction } from './components/Introduction'
import { Projects } from './components/Projects'
import { Container } from './styles/app.style'
import { GlobalStyle } from './styles/global'

import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Introduction toggleTheme={toggleTheme}/>
        <Projects />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
