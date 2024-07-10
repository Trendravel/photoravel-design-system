import styled from '@emotion/styled';

import convertCSS from '../../utils/convertCSS';

export interface ButtonProps {
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  padding?: string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  backgroundColor?: string;
  isGrayOut?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? convertCSS(width) : '100%')};
  height: ${({ height }) => height && convertCSS(height)};
  min-width: ${({ minWidth }) => minWidth && convertCSS(minWidth)};
  min-height: ${({ minHeight }) => minHeight && convertCSS(minHeight)};
  max-width: ${({ maxWidth }) => maxWidth && convertCSS(maxWidth)};
  max-height: ${({ maxHeight }) => maxHeight && convertCSS(maxHeight)};
  padding: ${({ padding }) => (padding ? padding : '17px 28px')};
  padding-top: ${({ paddingTop }) => paddingTop && convertCSS(paddingTop)};
  padding-right: ${({ paddingRight }) => paddingRight && convertCSS(paddingRight)};
  padding-bottom: ${({ paddingBottom }) => paddingBottom && convertCSS(paddingBottom)};
  padding-left: ${({ paddingLeft }) => paddingLeft && convertCSS(paddingLeft)};
  border: none;
  border-radius: 6px;
  background-color: ${({ isGrayOut, theme, backgroundColor }) =>
    isGrayOut ? theme.color.bg : backgroundColor ? theme.color[backgroundColor] : theme.color.pi};
  font-size: ${({ theme }) => theme.font.pretendard16sb.fontSize}px;
  font-weight: ${({ theme }) => theme.font.pretendard16sb.fontWeight};
  color: ${({ isGrayOut, theme }) => (isGrayOut ? theme.color.b : theme.color.w1)};
  cursor: pointer;
`;

export default Button;
