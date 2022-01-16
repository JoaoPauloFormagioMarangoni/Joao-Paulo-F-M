import { SocialMediaStylization } from './styles'
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'

export function SocialMedia() {
  return (
    <SocialMediaStylization>
      <a
        href="https://www.linkedin.com/in/joão-paulo-f-marangoni/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/JoaoPauloFormagioMarangoni"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://wa.me/5519988442536?text=Olá%20João%20Paulo"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
    </SocialMediaStylization>
  )
}
