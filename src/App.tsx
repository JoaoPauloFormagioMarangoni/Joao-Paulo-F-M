import { useState } from 'react'
import { Introduction } from './components/Introduction'
import { Projects } from './components/Projects'
import { Container } from './styles/app.style'
import { GlobalStyle } from './styles/global'

import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { ModalSendEmail } from './components/ModalSendEmail'

import Modal from 'react-modal'

Modal.setAppElement('#root');

function App() {
  const [theme, setTheme] = useState(light)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Introduction toggleTheme={toggleTheme} openModal={openModal} />
        <Projects />
      </Container>
      <ModalSendEmail closeModal={closeModal} modalIsOpen={modalIsOpen}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
