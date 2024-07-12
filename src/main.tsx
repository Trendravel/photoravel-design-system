import { Global, ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';

import App from './App';
import globalStyles from './styles/globalStyles';
import theme from './styles/theme';

import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <App />
  </ThemeProvider>,
);
