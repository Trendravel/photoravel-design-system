import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import { convertCSS } from '../..';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  width?: number | string;
  height?: number | string;
  padding?: string;
}

const Textarea = styled.textarea<TextareaProps>`
  box-sizing: border-box;
  width: ${({ width }) => (width && convertCSS(width)) || '100%'};
  height: ${({ height }) => (height && convertCSS(height)) || '100px'};
  border-radius: 6px;
  padding: ${({ padding }) => padding || '11px 16px'};
  font-size: ${({ theme }) => theme.font.pretendard14r.fontSize}px;
  font-weight: ${({ theme }) => theme.font.pretendard14r.fontWeight};
  border: 1px solid ${({ theme }) => theme.color.l2};
  outline: none;
  color: ${({ theme }) => theme.color.b4};
  background-color: ${({ theme }) => theme.color.w1};

  &:focus {
    border-color: ${({ theme }) => theme.color.pi};
  }
`;

export default Textarea;
