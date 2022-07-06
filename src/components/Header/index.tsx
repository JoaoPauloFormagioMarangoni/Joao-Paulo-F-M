import { useContext, useState } from 'react'

import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import { Container, TopMenu } from './styles'
import { BsThreeDots } from 'react-icons/bs'

interface PropsIntroduction {
  toggleTheme: () => void
}

export function Header({ toggleTheme }: PropsIntroduction) {
  const { colors, title } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [language, setLanguage] = useState('portuguese')

  function handleChangeLanguage(event: any) {
    setLanguage(event.target.value)
    if (event.target.value === 'portuguese') {
      i18n.changeLanguage('pt-BR')
    } else {
      i18n.changeLanguage('en-US')
    }
  }

  return (
    <Container>
      <nav>
        <BsThreeDots className="iconMenu" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">{t('Sobre')}</a>
          </li>
          <li>
            <a href="#projects">{t('Projetos')}</a>
          </li>
        </ul>
        <TopMenu>
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            width={50}
            height={20}
            handleDiameter={10}
            offColor={colors.primary}
            onColor={colors.primary}
          />
          <select
            name="language"
            id="language"
            value={language}
            onChange={handleChangeLanguage}
          >
            <option value="english">{t('Inglês')}</option>
            <option value="portuguese">{t('Português')}</option>
          </select>
        </TopMenu>
      </nav>
    </Container>
  )
}
