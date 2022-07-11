import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: ${(props) => props.theme.colors.background};
        --orange: ${(props) => props.theme.colors.primary};
        --text: ${(props) => props.theme.colors.text};
        --blackAndWhite: ${(props) => props.theme.colors.blackAndWhite};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
          font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
          font-size: 87.5%; // 14px
      }

      scroll-behavior: smooth;
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-display: swap;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-content {
        background: var(--background);
        padding: 3rem;
        width: 100%;
        max-width: 800px;
        margin: 10px;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;

      h1 {
          color: var(--blackAndWhite);
          margin-bottom: 15px;
      }
    }

    .react-modal-close {
        display: flex;
        align-items: center;
        
        position: absolute;
        right: 1rem;
        top: 1rem;
        border: 0;
        background: transparent;
        border-radius: 50%;
        padding: 4px;
        font-size: 20px;

        color: var(--blackAndWhite);

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (min-width: 600px) and (max-width: 1000px) and (orientation: landscape) {
        .react-modal-content {
            padding: 1rem;
            margin: 0;
            height: 100%;
        }
    }
`
