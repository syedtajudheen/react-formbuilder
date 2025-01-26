import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --border-input: #ccc;
    --file-foreground: #333;
    --placeholder-muted-foreground: #999;
    --ring: #007bff;
    --background: #fff;
    --foreground: #000;
    --hover-background: #f0f0f0;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    /* color: var(--foreground); */
  }
`;

export default GlobalStyle;