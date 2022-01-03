import { AllInfos, DarkMode, TopMenu, UserImage } from './style'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import userImg from '../../assets/userImage.jpeg'

export function Introduction() {
  return (
    <AllInfos>
      <TopMenu>
        <DarkMode>
          <MdOutlineDarkMode />
          <MdDarkMode />
        </DarkMode>
        <select name="language" id="language">
          <option value="english">Inglês</option>
          <option value="portuguese" selected>
            Portugues
          </option>
        </select>
      </TopMenu>
      <UserImage>
        <img src={userImg} alt="Imagem de perfil do github" />
        <p>João Paulo Formagio Marangoni</p>
      </UserImage>
      <button>Contact me</button>
    </AllInfos>
  )
}
