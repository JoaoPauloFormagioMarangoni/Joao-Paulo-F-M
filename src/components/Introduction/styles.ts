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
    color: var(--text);
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      filter: brightness(0.96);

      transform: scaleY(1.1);
    }
  }

  @media (max-width: 1200px) {
    height: 75vh;
    width: 100vw;
  }

  @media (max-width: 375px) {
    padding: 20px;
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
    color: var(--name);

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

  select {
    border-radius: 999px;
    padding: 3px 15px;
    font-size: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`
