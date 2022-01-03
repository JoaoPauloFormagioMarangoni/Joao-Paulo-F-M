import { useState } from 'react'
import Slider from 'react-slick'
import { SocialMedia } from '../SocialMedia'
import { ProjectsAndLinks } from './styles'
import projectQuartoDoYoga from '../../assets/projectQuartoDoYoga.png'
import projectAnimesOnline from '../../assets/projectAnimesOnline.png'

import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()

  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <a
      href="https://quartodoyoga.vercel.app/home"
      target="_blank"
      title="Quarto do Yoga"
    >
      <img src={projectQuartoDoYoga} alt={projectQuartoDoYoga} />
    </a>,
    <a
      href="https://animesOnline.vercel.app"
      target="_blank"
      title="Animes online"
    >
      <img src={projectAnimesOnline} alt={projectAnimesOnline} />
    </a>,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
  ]

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (oldIndex: number, newIndex: number) =>
      setImageIndex(newIndex),
  }

  return (
    <ProjectsAndLinks>
      <h1>{t('Projetos desenvolvidos')}</h1>
      <Slider {...settings} lazyLoad="progressive">
        {slides.map((img, idx) => (
          <div key={idx} className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
            {img}
          </div>
        ))}
      </Slider>
      <SocialMedia />
    </ProjectsAndLinks>
  )
}
