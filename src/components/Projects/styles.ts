import styled from 'styled-components'

export const ProjectsAndLinks = styled.main`
  width: 80vw;
  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    position: relative;
    text-align: center;
    padding-bottom: 20px;
    font-size: 1.8rem;
    color: var(--text);
    margin-bottom: 10px;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;

    animation: animationTitleProjects 3s infinite ease-out;

    &::after {
      content: '';
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      width: 370px;
      border-radius: 50%;
      filter: blur(4px);
      opacity: 0;
      height: 4px;
      background: #ffb26a;
      animation: animationTitleProjectsAfter 3s infinite ease-out;
    }

    @keyframes animationTitleProjects {
      0% {
        text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
          1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
      }
      50% {
        text-shadow: 2px 0 0 #ffb26a, -2px 0 0 #ffb26a, 0 2px 0 #ffb26a,
          0 -2px 0 #ffb26a, 1px 1px #ffb26a, -1px -1px 0 #ffb26a,
          1px -1px 0 #ffb26a, -1px 1px 0 #ffb26a;
      }
      100% {
        text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
          1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
      }
    }

    @keyframes animationTitleProjectsAfter {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  div {
    &.slide {
      transform: scale(0.5);
      transition: transform 300ms;
      opacity: 0.5;

      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 10px;

        transition: all 0.2s ease-out;

        &:hover {
          border: 2px solid orange;
          box-shadow: 2px 2px 5px orange, 2px -2px 5px orange,
            -2px 2px 5px orange, -2px -2px 5px orange;
        }
      }

      a {
        display: block;
        text-align: center;
        text-decoration: none;
        color: var(--text);
        background: var(--orange);
        border-radius: 10px;
        box-shadow: 0 0 5px #000;
        margin: 5px 0 4px;
        font-size: 1.5rem;
        text-shadow: 2px 2px 4px #000;

        transition: all 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    .slick-next:before,
    .slick-prev:before {
      color: var(--blackAndWhite);
    }

    &.activeSlide {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    width: 80vw;
  }

  @media (max-width: 640px) {
    div {
      &.slide {
        a {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (min-width: 600px) and (max-width: 1000px) and (orientation: landscape) {
    height: auto;
    margin-bottom: 10px;
  }

  @media (max-width: 372px) {
    h1::after {
      width: 220px;
    }
  }
`
