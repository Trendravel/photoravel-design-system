import styled from '@emotion/styled';

import { convertCSS } from '../..';
import { ColorType } from '../../styles/theme';

type ColorKeyType = keyof Pick<ColorType, 'l3' | 'b'>;

export interface DividerProps {
  width?: number | string;
  height?: number | string;
  top?: number | string;
  bottom?: number | string;
  color?: ColorKeyType;
}

const Divider = styled.hr<DividerProps>`
  width: ${({ width }) => (width ? convertCSS(width) : '100%')};
  height: ${({ height }) => (height ? convertCSS(height) : '1px')};
  margin-top: ${({ top }) => top && convertCSS(top)};
  margin-bottom: ${({ bottom }) => bottom && convertCSS(bottom)};
  border: none;
  background-color: ${({ theme, color: divideColor }) => (divideColor ? theme.color[divideColor] : theme.color.b)};
`;

export default Divider;
