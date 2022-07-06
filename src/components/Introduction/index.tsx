import { AllInfos, UserStyle } from './styles'
import userImg from '../../assets/user.png'

import { useTranslation } from 'react-i18next'
import codeBackground from '../../assets/codeBackground.jpg'


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
        <p>João Paulo Formagio Marangoni</p>
        <button onClick={openModal}>{t('Contate-me')}</button>
      </UserStyle>
    </AllInfos>
  )
}
