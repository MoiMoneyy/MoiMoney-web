import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-Thin.woff2') format('woff2'); 
    font-weight: 100; 
    font-display: swap; 
  }
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-ExtraLight.woff2') format('woff2'); 
    font-weight: 200; 
    font-display: swap; 
  } 
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-Light.woff2') format('woff2');
    font-weight: 300; font-display: swap; 
  } 
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-Regular.woff2') format('woff2'); 
    font-weight: 400; 
    font-display: swap; 
  }
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-Medium.woff2') format('woff2'); 
    font-weight: 500; 
    font-display: swap; 
  } 
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-SemiBold.woff2') format('woff2'); 
    font-weight: 600; 
    font-display: swap; 
  } 
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-Bold.woff2') format('woff2'); 
    font-weight: 700; 
    font-display: swap; 
  } 
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-ExtraBold.woff') format('woff'); 
    font-weight: 800; 
    font-display: swap; 
  } 
  @font-face { 
    font-family: 'Pretendard'; 
    src: url('/src/assets/font/Pretendard/Pretendard-Black.woff') format('woff'); 
    font-weight: 900; 
    font-display: swap; 
  }

  body {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }
  button{
    background: none;
    border: 0;
  }
`;

export default GlobalStyle;
