import Divider from '../components/Divider/Divider';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description:
        'Divider 컴포넌트의 width를 설정합니다. 숫자로 전달하면 convertCSS 함수를 통해 px 단위로 변환하여 적용하고, px를 붙여 문자열로 전달하면 그대로 적용됩니다. 기본 값은 100%입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    height: {
      control: 'text',
      description:
        'Divider 컴포넌트의 height를 설정합니다. 숫자로 전달하면 convertCSS 함수를 통해 px 단위로 변환하여 적용하고, px를 붙여 문자열로 전달하면 그대로 적용됩니다. 기본 값은 1px입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    top: {
      control: 'text',
      description: 'Divider 컴포넌트의 상단 여백을 설정합니다. 기본 값은 0입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    bottom: {
      control: 'text',
      description: 'Divider 컴포넌트의 하단 여백을 설정합니다. 기본 값은 0입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    color: {
      control: 'select',
      options: ['l3', 'b'],
      description: 'Divider 컴포넌트의 색상을 설정합니다. 기본 값은 b 입니다.',
      table: {
        type: {
          summary: 'l3 | b',
        },
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Example1: Story = {
  args: {
    width: '100px',
    height: 1,
    top: 10,
    color: 'b',
  },
};

export const Example2: Story = {
  args: {
    width: 300,
    height: '2px',
    bottom: '50px',
    color: 'b',
  },
};
