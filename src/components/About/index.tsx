import { useTranslation } from 'react-i18next'
import { SocialMedia } from '../SocialMedia'
import { AboutAnimation, Container } from './styles'

export function About() {
  const { t } = useTranslation()

  return (
    <Container id="about">
      <SocialMedia />
      <div>
        <AboutAnimation>
          <h2>{t('Sobre')}</h2>
          <span>
            <span></span>
          </span>
        </AboutAnimation>
        <p>
          {t(
            'Olá, eu me chamo João Paulo, tenho 22 anos e moro no Brasil, atualmente estou cursando Ciência da Computação na EEP (Escola de Engenharia de Piracicaba), comecei em 2018 e estou terminando em 2022.',
          )}
        </p>
        <p>
          {t(
            'Atualmente não estou empregado, mas pretendo trabalhar em uma área voltada ao desenvolvimento web, especificamente no Front-end utilizando o ReactJS e o NextJS.',
          )}
        </p>
      </div>
    </Container>
  )
}
