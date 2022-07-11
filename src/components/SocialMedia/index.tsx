import { SocialMediaStylization } from './styles'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaWhatsappSquare } from 'react-icons/fa'

export function SocialMedia() {
  return (
    <SocialMediaStylization>
      <a
        href="https://www.linkedin.com/in/joão-paulo-f-marangoni/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="icon" />
        <span>Linkedin</span>
        <div>
          <span></span>
          <span></span>
        </div>
      </a>
      <a
        href="https://github.com/JoaoPauloFormagioMarangoni"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className="icon" />
        <span>Github</span>
        <div>
          <span></span>
          <span></span>
        </div>
      </a>
      <a
        href="https://wa.me/5519988442536?text=Olá%20João%20Paulo"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsappSquare className="icon" />
        <span>WhatsApp</span>
      </a>
    </SocialMediaStylization>
  )
}
