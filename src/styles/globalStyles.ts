import { css } from '@emotion/react';

const globalStyles = css`
  #root {
    margin: 0 auto;
  }

  * {
    font-family: 'Pretendard', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #00000066;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 14px;
    opacity: 0;
  }
`;

export default globalStyles;
