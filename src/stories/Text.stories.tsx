import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import Text from '../components/Text/Text';
import theme, { ColorKeyType, FontKeyType } from '../styles/theme';

const fontKeys = Object.keys(theme.font) as FontKeyType[];
const colorKeys = Object.keys(theme.color) as ColorKeyType[];

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Text 컴포넌트의 텍스트를 설정합니다.',
    },
    font: {
      control: 'select',
      description: 'Text 컴포넌트의 폰트를 설정합니다. 기본 값은 pretendard14m 입니다.',
      table: {
        type: {
          summary: fontKeys.join(' | '),
        },
      },
    },
    color: {
      control: 'select',
      description: 'Text 컴포넌트의 색상을 설정합니다. 기본 값은 pi 입니다.',
      table: {
        type: {
          summary: colorKeys.join(' | '),
        },
      },
    },
    required: {
      control: 'boolean',
      description: 'Text 컴포넌트의 필수 여부를 설정합니다.',
    },
    as: {
      control: false,
      description: 'Text 컴포넌트의 DOM tag를 설정합니다. 기본 값은 span 입니다.',
      table: {
        type: {
          summary: 'ElementType',
        },
      },
    },
    wordBreak: {
      control: 'select',
      options: ['normal', 'break-all', 'keep-all', 'break-word'],
      table: {
        type: {
          summary: 'normal | break-all | keep-all | break-word',
        },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Example1: Story = {
  args: {
    children: 'Text Component, 텍스트 컴포넌트',
    font: 'pretendard14m',
    color: 'pi',
    required: false,
    as: 'span',
  },
};

interface Size {
  font: FontKeyType[];
  color: ColorKeyType[];
}

export const Example2: Story = {
  render: () => {
    const size = {
      font: fontKeys,
      color: colorKeys,
    } as Size;
    const children = 'Text Component, 텍스트 컴포넌트';
    const defaultFont = 'pretendard14m';
    const defaultColor = 'pi';

    return (
      <div style={{ display: 'flex', gap: '40px' }}>
        <section>
          {size.font.map((font) => (
            <Fragment key={font}>
              <div
                style={{
                  margin: '12px 0 4px 0',
                  color: '#a6a6a6',
                  fontSize: '13px',
                }}
              >
                [{font}]
              </div>
              <Text font={font} color={defaultColor}>
                {children}
              </Text>
            </Fragment>
          ))}
        </section>
        <section>
          {size.color.map((color) => (
            <Fragment key={color}>
              <div
                style={{
                  margin: '12px 0 4px 0',
                  color: '#a6a6a6',
                  fontSize: '13px',
                }}
              >
                [{color}]
              </div>
              <Text font={defaultFont} color={color}>
                {children}
              </Text>
            </Fragment>
          ))}
        </section>
      </div>
    );
  },
};
