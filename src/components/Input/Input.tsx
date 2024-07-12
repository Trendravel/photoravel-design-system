import styled from '@emotion/styled';

import convertCSS from '../../utils/convertCSS';

export interface InputProps {
  width?: number | string;
  height?: number | string;
  padding?: string;
}

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  width: ${({ width }) => (width && convertCSS(width)) || '100%'};
  height: ${({ height }) => (height && convertCSS(height)) || '40px'};
  padding: ${({ padding }) => padding || '11px 16px'};
  border: 1px solid ${({ theme }) => theme.color.l2};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.w1};
  font-size: ${({ theme }) => theme.font.pretendard14r.fontSize}px;
  font-weight: ${({ theme }) => theme.font.pretendard14r.fontWeight};
  color: ${({ theme }) => theme.color.b4};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.color.pi};
  }
`;

export default Input;
