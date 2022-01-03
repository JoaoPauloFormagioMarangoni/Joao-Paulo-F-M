import { useState } from 'react'
import Slider from 'react-slick'
import { SocialMedia } from '../SocialMedia'
import { ProjectsAndLinks } from './style'
import projectQuartoDoYoga from '../../assets/projectQuartoDoYoga.png'
import projectAnimesOnline from '../../assets/projectAnimesOnline.png'

export function Projects() {
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src={projectQuartoDoYoga} alt={projectQuartoDoYoga} />,
    <img src={projectAnimesOnline} alt={projectAnimesOnline} />,
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
      <h1>Projetos desenvolvidos</h1>
      <Slider {...settings} lazyLoad="progressive">
        {slides.map((img, idx) => (
          <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
            {img}
          </div>
        ))}
      </Slider>
      <SocialMedia />
    </ProjectsAndLinks>
  )
}
