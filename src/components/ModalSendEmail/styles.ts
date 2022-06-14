import styled from 'styled-components'

export const FormEmail = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  input,
  textarea {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    transition: all 0.2s;
    cursor: pointer;

    &:focus {
      outline: 2px solid var(--orange);
    }
  }

  textarea {
    resize: none;
    height: 120px;
  }

  div {
    display: flex;
    width: 100%;
    gap: 10px;

    div.loading {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        border: 4px solid var(--orange);
        border-right-color: #5e5e5e;
        width: 30px;
        height: 30px;
        border-radius: 50%;

        animation: loading 1s linear infinite;

        @keyframes loading {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }

    input[type='submit']:not(:disabled):hover {
      background-color: #32cd32;
      color: #fff;
    }

    input[type='submit']:disabled {
      cursor: not-allowed;
    }

    input[type='reset']:hover {
      background-color: #ff4040;
      color: #fff;
    }

  }
  
  @media (min-width: 600px) and (max-width: 1000px) and (orientation: landscape) {
    textarea {
      height: 90px;
    }
  }
`
