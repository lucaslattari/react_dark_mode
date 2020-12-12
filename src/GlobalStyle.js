import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.15s linear;
  }

  .search-box-style{
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.searchBoxBackgroundColor};
    height: 2em;
    width: 80%;
    margin: 0.3em;
    font-size: 3em;

    transition: all 0.35s linear;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: ${({ theme }) => theme.gridBackgroundColor};
    padding: 10px;

    transition: all 0.15s linear;
  }

  .grid-item {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.searchBoxBackgroundColor};
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 15px;
    font-size: 30px;
    text-align: center;
  }

  button{
    border: none;
    padding: 15px 32px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    opacity: 1;

    background-color: ${({ theme }) => theme.buttonBackgroundColor};
    color: ${({ theme }) => theme.text};

    &:hover {
      opacity: 0.6;
    }
  }
  `;
