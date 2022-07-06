import styled from 'styled-components'

import codeBackground from '../../assets/codeBackground.jpg'

export const AllInfos = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url(${codeBackground}) no-repeat;
  background-size: cover;

  padding: 110px 0 30px;

  div:first-child {
    border-radius: 50%;
    width: 360px;
    height: 360px;
    background: var(--orange);
    position: relative;

    span:not(:nth-child(9)) {
      position: absolute;
      background-color: var(--orange);
      border-radius: 50%;
    }

    span:nth-child(9) {
      position: absolute;

      img {
        border-radius: 50%;
        width: 360px;
        object-fit: cover;
      }
    }

    span:nth-child(1),
    span:nth-child(2),
    span:nth-child(3) {
      width: 300px;
      height: 300px;
    }

    span:nth-child(1) {
      top: -50px;
      left: -50px;
    }

    span:nth-child(2) {
      top: 0px;
      left: 90px;
    }

    span:nth-child(3) {
      top: -50px;
      left: 50px;
    }

    span:nth-child(4) {
      animation: spanFour 4s infinite;

      @keyframes spanFour {
        0% {
          width: 50px;
          height: 50px;
          top: -100px;
          left: 20px;
        }
        50% {
          width: 40px;
          height: 40px;
          top: -105px;
          left: 10px;
        }
        100% {
          width: 50px;
          height: 50px;
          top: -100px;
          left: 20px;
        }
      }
    }

    span:nth-child(5) {
      animation: spanFive 5s infinite;

      @keyframes spanFive {
        0% {
          width: 30px;
          height: 30px;
          top: -80px;
          left: 500px;
        }
        50% {
          width: 20px;
          height: 20px;
          top: -20px;
          left: 450px;
        }
        100% {
          width: 30px;
          height: 30px;
          top: -80px;
          left: 500px;
        }
      }
    }

    span:nth-child(6) {
      animation: spanSix 6s infinite;

      @keyframes spanSix {
        0% {
          top: -50px;
          left: 350px;
          width: 40px;
          height: 40px;
        }
        50% {
          top: -60px;
          left: 400px;
          width: 20px;
          height: 20px;
        }
        100% {
          top: -50px;
          left: 350px;
          width: 40px;
          height: 40px;
        }
      }
    }

    span:nth-child(7) {
      width: 20px;
      height: 20px;
      animation: spanSeven 4s infinite;

      @keyframes spanSeven {
        0% {
          top: -95px;
          left: 280px;
        }
        50% {
          top: -100px;
          left: 300px;
        }
        100% {
          top: -95px;
          left: 280px;
        }
      }
    }

    span:nth-child(8) {
      width: 15px;
      height: 15px;
      animation: spanEight 5s infinite;

      @keyframes spanEight {
        0% {
          top: 100px;
          left: 430px;
        }
        50% {
          top: 120px;
          left: 440px;
        }
        100% {
          top: 100px;
          left: 430px;
        }
      }
    }
  }

  @media (max-width: 880px) {
    flex-direction: column;

    div:first-child {
      margin-bottom: 20px;
      width: 300px;
      height: 300px;

      span:nth-child(1),
      span:nth-child(2),
      span:nth-child(3) {
        width: 240px;
        height: 240px;
      }

      span:nth-child(5) {
        display: none;
      }

      span:nth-child(6) {
        @keyframes spanSix {
          0% {
            top: -50px;
            left: 250px;
            width: 40px;
            height: 40px;
          }
          50% {
            top: -60px;
            left: 300px;
            width: 20px;
            height: 20px;
          }
          100% {
            top: -50px;
            left: 250px;
            width: 40px;
            height: 40px;
          }
        }
      }

      span:nth-child(7) {
        @keyframes spanSeven {
          0% {
            top: -80px;
            left: 180px;
          }
          50% {
            top: -85px;
            left: 200px;
          }
          100% {
            top: -80px;
            left: 180px;
          }
        }
      }

      span:nth-child(8) {
        @keyframes spanEight {
          0% {
            top: 100px;
            left: 335px;
          }
          50% {
            top: 120px;
            left: 340px;
          }
          100% {
            top: 100px;
            left: 335px;
          }
        }
      }

      span:nth-child(9) {
        img {
          width: 300px;
        }
      }
    }
  }

  @media (max-width: 415px) {
    span:nth-child(8) {
      display: none;
    }
  }

  @media (max-width: 367px) {
    div:first-child {
      width: 200px;
      height: 200px;

      span:nth-child(1),
      span:nth-child(2),
      span:nth-child(3) {
        width: 140px;
        height: 140px;
      }

      span:nth-child(9) {
        img {
          width: 200px;
        }
      }

      span:nth-child(6) {
        display: none;
      }
    }
  }
`

export const UserStyle = styled.div`
  p {
    font-size: 1.1rem;
    position: relative;
    color: #e9e9e9;
    margin-bottom: 30px;
    background: rgba(255, 255, 255, 0.25);
    padding: 8px 15px;
    border-radius: 10px 0 10px 0;

    &::after {
      content: '';
      width: 25%;
      height: 3px;
      background-color: var(--orange);
      position: absolute;
      top: -2px;
      right: 0;
    }

    &::before {
      content: '';
      width: 25%;
      height: 3px;
      background-color: var(--orange);
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  }

  button {
    width: 100%;
    padding: 7px 0px;
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
`
