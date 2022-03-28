import { useState } from 'react'
import Slider from 'react-slick'
import { SocialMedia } from '../SocialMedia'
import { ProjectsAndLinks } from './styles'

import projectQuartoDoYoga from '../../assets/projectQuartoDoYoga.webp'
import projectAnimesOnline from '../../assets/projectAnimesOnline.webp'
import projectCineAraujoCopy from '../../assets/projectCineAraujoCopy.webp'
import projectShopHome from '../../assets/projectShopHome.webp'

import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()

  let slides = [
    {
      image: (
        <a
          href="https://quartodoyoga.vercel.app/home"
          target="_blank"
          rel="noreferrer"
          title="Quarto do Yoga"
        >
          <img src={projectQuartoDoYoga} alt="Quarto do Yoga" />
        </a>
      ),
      title: 'Quarto do Yoga',
      link: 'https://quartodoyoga.vercel.app/home',
    },
    {
      image: (
        <a
          href="https://animesOnline.vercel.app"
          target="_blank"
          rel="noreferrer"
          title="Animes online"
        >
          <img src={projectAnimesOnline} alt="Animes online" />
        </a>
      ),
      title: 'Animes online',
      link: 'https://animesOnline.vercel.app',
    },
    {
      image: (
        <a
          href="https://cinearaujo-copy.vercel.app"
          target="_blank"
          rel="noreferrer"
          title="CineAraujo-Copy"
        >
          <img src={projectCineAraujoCopy} alt="CineAraujo-Copy" />
        </a>
      ),
      title: 'CineAraujo-Copy',
      link: 'https://cinearaujo-copy.vercel.app',
    },
    {
      image: (
        <a
          href="https://shophome.vercel.app"
          target="_blank"
          rel="noreferrer"
          title="Shop Home"
        >
          <img src={projectShopHome} alt="Shop Home" />
        </a>
      ),
      title: 'Shop Home',
      link: 'https://shophome.vercel.app',
    },
  ]

  const [imageIndex, setImageIndex] = useState(0)

  let width: number = window.screen.width

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: width < 630 ? 1 : 3,
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
          <div
            key={idx}
            className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
          >
            {img.image}
            <a href={img.link} rel="noreferrer" target="_blank">
              {img.title}
            </a>
          </div>
        ))}
      </Slider>
      <SocialMedia />
    </ProjectsAndLinks>
  )
}
