import styled from 'styled-components'

export const AllInfos = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  padding: 100px;

  button {
    width: 100%;
    padding: 10px 0;
    font-size: 1.1rem;
    background-color: var(--orange);
    border: 0;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    color: #f6f6f6;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.96);

      transform: scaleY(1.1);
    }
  }
`

export const UserImage = styled.div`
  img {
    display: block;
    border-radius: 100%;
    width: 230px;
    height: auto;
    margin: 0 auto 40px;
    object-fit: cover;

    border: 5px solid var(--orange);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 1.1rem;
    position: relative;

    &::after {
      content: '';
      width: 20%;
      height: 3px;
      background-color: var(--orange);
      position: absolute;
      top: -2px;
      right: 0;
    }

    &::before {
      content: '';
      width: 20%;
      height: 3px;
      background-color: var(--orange);
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  }
`

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const DarkMode = styled.div`
    width: 50px;
    border-radius: 999px;
    border: 1px solid #000;

    display: flex;
    justify-content: space-between;
    padding: 4px;
`
