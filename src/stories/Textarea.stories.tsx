import { ChangeEvent, useEffect, useState } from 'react';

import Textarea from '../components/Textarea/Textarea';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description:
        'Textarea 컴포넌트의 width를 설정합니다. 숫자로 전달하면 convertCSS 함수를 통해 px 단위로 변환하여 적용하고, px를 붙여 문자열로 전달하면 그대로 적용됩니다. Default 값은 100%입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    height: {
      control: 'text',
      description:
        'Textarea 컴포넌트의 height를 설정합니다. 숫자로 전달하면 convertCSS 함수를 통해 px 단위로 변환하여 적용하고, px를 붙여 문자열로 전달하면 그대로 적용됩니다. Default 값은 100px입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    padding: {
      control: 'text',
      description: 'Textarea 컴포넌트의 padding을 설정합니다. Default 값은 11px 16px입니다.',
    },
    value: {
      control: 'text',
      description: 'Textarea 컴포넌트의 value를 설정합니다.',
    },
    onChange: {
      control: false,
      description: 'Textarea 컴포넌트의 value가 변경될 때 호출되는 함수입니다.',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    width: '100%',
    height: '44px',
    padding: '11px 16px',
    value: 'input with default width, height and padding value',
  },
  render: ({ width, height, padding, value }) => {
    const userInput = value as string;
    const [input, setInput] = useState<string>(userInput);

    useEffect(() => {
      setInput(userInput);
    }, [userInput]);

    return (
      <Textarea
        width={width}
        height={height}
        padding={padding}
        value={input}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
      />
    );
  },
};

export const Example2: Story = {
  args: {
    width: 500,
    height: 60,
    padding: '20px 20px',
    value: 'input with width and height as number and padding as string',
  },
  render: ({ width, height, padding, value }) => {
    const userInput = value as string;
    const [input, setInput] = useState<string>(userInput);

    useEffect(() => {
      setInput(userInput);
    }, [userInput]);

    return (
      <Textarea
        width={width}
        height={height}
        padding={padding}
        value={input}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
      />
    );
  },
};
