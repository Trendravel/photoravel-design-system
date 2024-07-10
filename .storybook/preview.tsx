import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';

import theme from '../src/styles/theme';
import resetStyles from './resetStyles';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={resetStyles} />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
