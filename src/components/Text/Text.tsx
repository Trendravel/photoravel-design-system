import styled from '@emotion/styled';
import { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import SVGTextRequired from '../../assets/svg/text_required.svg?react';
import { ColorKeyType, FontKeyType } from '../../styles/theme';

type Props<T extends ElementType> = {
  children: ReactNode;
  as?: T;
  font?: FontKeyType;
  color?: ColorKeyType;
  required?: boolean;
  wordBreak?: CSSProperties['wordBreak'];
} & ComponentPropsWithoutRef<T>;

const Text = <T extends ElementType>({
  as,
  children,
  font = 'pretendard14m',
  color = 'b',
  required = false,
  ...attributes
}: Props<T>) => {
  const tag = as || 'span';

  return (
    <Wrapper as={tag} textColor={color} textFont={font} {...attributes}>
      {children}
      {required && (
        <RequiredWrapper>
          <SVGTextRequired />
        </RequiredWrapper>
      )}
    </Wrapper>
  );
};

export const Wrapper = styled.span<{
  textColor: ColorKeyType;
  textFont: FontKeyType;
}>`
  display: flex;
  flex-direction: row;
  color: ${({ theme, textColor }) => theme.color[textColor]};
  font-size: ${({ theme, textFont }) => theme.font[textFont].fontSize}px;
  font-weight: ${({ theme, textFont }) => theme.font[textFont].fontWeight};
`;

export const RequiredWrapper = styled.div`
  margin-left: 6px;
  display: flex;
  align-items: start;
`;

export default Text;
