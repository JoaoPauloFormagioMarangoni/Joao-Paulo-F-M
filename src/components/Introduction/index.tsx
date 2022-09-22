import { AllInfos, UserStyle } from './styles'
import Typewriter from 'typewriter-effect'

import userImg from '../../assets/user.webp'

import { useTranslation } from 'react-i18next'

interface PropsIntroduction {
  openModal: () => void
}

export function Introduction({ openModal }: PropsIntroduction) {
  const { t } = useTranslation()

  return (
    <AllInfos id="home">
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <img src={userImg} alt="Imagem de perfil" />
        </span>
      </div>
      <UserStyle>
        <Typewriter
          options={{
            strings: ['João Paulo Formagio Marangoni'],
            autoStart: true,
            loop: true,
          }}
        />
        <button onClick={openModal}>{t('Contate-me')}</button>
      </UserStyle>
    </AllInfos>
  )
}
