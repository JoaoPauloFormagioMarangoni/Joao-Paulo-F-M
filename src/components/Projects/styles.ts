import styled from 'styled-components'

export const ProjectsAndLinks = styled.main`
  width: 50%;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    text-align: center;
    font-size: 1.8rem;
    color: var(--text);
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }

  div {
    &.slide {
      transform: scale(0.3);
      transition: transform 300ms;
      opacity: 0.5;

      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 10px;
      }
    }

    &.activeSlide {
      transform: scale(1);
      opacity: 1;
    }
  }
`
