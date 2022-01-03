import { AllInfos, TopMenu, UserImage } from './styles'
import userImg from '../../assets/userImage.jpeg'
import { useContext, useState } from 'react'

import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

interface PropsIntroduction {
  toggleTheme: () => void
}

export function Introduction({ toggleTheme }: PropsIntroduction) {
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
    <AllInfos>
      <TopMenu>
        <Switch 
          onChange={toggleTheme}
          checked={title == 'dark'}
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
      <UserImage>
        <img src={userImg} alt="Imagem de perfil do github" />
        <p>João Paulo Formagio Marangoni</p>
      </UserImage>
      <button>{t('Contate-me')}</button>
    </AllInfos>
  )
}
