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


    input[type='submit']:hover {
      background-color: #32cd32;
      color: #fff;
    }

    input[type='reset']:hover {
      background-color: #ff4040;
      color: #fff;
    }
  }
`
