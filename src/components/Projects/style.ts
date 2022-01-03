import styled from 'styled-components'

export const ProjectsAndLinks = styled.main`
  width: 50%;
  margin: 10rem auto;
  height: 570px;

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
