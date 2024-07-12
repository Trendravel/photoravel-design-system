import { Global, ThemeProvider } from '@emotion/react';

import globalStyles from './styles/globalStyles';
import theme from './styles/theme';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const PhotoravelProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default PhotoravelProvider;
