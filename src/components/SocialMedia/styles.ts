import styled from 'styled-components'

export const SocialMediaStylization = styled.aside`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;

  a:nth-child(2) {
    border-radius: 35px 0 0 35px;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--text);
    padding: 5px 55px;

    border-radius: 5px;
    background: var(--orange);
    width: 200px;

    transition: all 0.2s;

    &:hover {
      color: var(--orange);
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
      background-color: var(--text);
    }

    .icon {
      margin-right: 5px;
      position: absolute;
      left: 0;
      top: 0;
      font-size: 3rem;
      height: 100%;
    }

    > span {
      font-size: 1.5rem;
    }

    div {
      cursor: auto;
      position: absolute;
      bottom: -60%;
      left: 0;
      width: 200px;
      height: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      span {
        width: 20px;
        border-radius: 10px;
        height: 5px;
        background-color: #ffab5d;

        &:nth-child(1) {
          animation: socialMediaBetweenFirstSpan 2s infinite;
          animation-delay: 1s;
        }

        &:nth-child(2) {
          animation: socialMediaBetweenFirstSpan 2s infinite;
        }
      }

      @keyframes socialMediaBetweenFirstSpan {
        0% {
          box-shadow: 0 0 3px #ffe1c5;
          opacity: 1;
        }
        50% {
          box-shadow: 0 0 0px #ffe1c5;
          opacity: 0.3;
        }
        100% {
          box-shadow: 0 0 3px #ffe1c5;
          opacity: 1;
        }
      }
    }
  }
`
