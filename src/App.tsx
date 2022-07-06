import { useState } from 'react'
import { Introduction } from './components/Introduction'
import { Projects } from './components/Projects'
import { ModalSendEmail } from './components/ModalSendEmail'
import { Header } from './components/Header'

import { Container } from './styles/app.style'
import { GlobalStyle } from './styles/global'

import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Modal from 'react-modal'
import { About } from './components/About'

Modal.setAppElement('#root')

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
        <Header toggleTheme={toggleTheme} />
        <Introduction openModal={openModal} />
        <About />
        <Projects />
      </Container>
      <ModalSendEmail closeModal={closeModal} modalIsOpen={modalIsOpen} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
