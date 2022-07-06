import styled from 'styled-components'

export const Container = styled.article`
  background: #393939;
  box-shadow: inset 0 0 10px var(--orange);

  display: flex;
  align-items: center;
  padding: 40px 20px;

  p {
    color: var(--text);
    text-align: justify;
    padding: 0 40px 0 20px;
    line-height: 30px;
    letter-spacing: 1px;
    text-indent: 2rem;
    font-size: 1.15rem;
  }

  @media (max-width: 860px) {
    flex-direction: column-reverse;

    p:last-child {
      margin-bottom: 20px;
    }
  }
`

export const AboutAnimation = styled.span`
  position: relative;

  h2 {
    font-size: 1.8rem;
    color: var(--text);
    margin-bottom: 15px;
  }

  > span {
    position: absolute;
    width: 30%;
    height: 3px;
    background: var(--orange);
    bottom: -1px;
    left: 0;
    box-shadow: 0 0 3px #ffe1c5;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--orange);
      filter: blur(4px);
      transform: rotateX(45deg);
    }

    > span {
      position: absolute;
      background: #ffb26a;
      width: 10%;
      height: 100%;
      top: 0;
      animation: aboutAnimation 4s infinite;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 4px;
        background: #ffb26a;
        filter: blur(4px);
        transform: rotateX(45deg);
      }
    }

    @keyframes aboutAnimation {
      0% {
        left: 0;
      }
      50% {
        left: 90%;
      }
      100% {
        left: 0;
      }
    }
  }

  @media (max-width: 860px) {
    h2, > span {
      margin-left: 10px;
    }
  }
`
