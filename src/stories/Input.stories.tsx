import { ChangeEvent, useEffect, useState } from 'react';

import Input from '../components/Input/Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description:
        'Input 컴포넌트의 width를 설정합니다. 숫자로 전달하면 convertCSS 함수를 통해 px 단위로 변환하여 적용하고, px를 붙여 문자열로 전달하면 그대로 적용됩니다. Default 값은 100%입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    height: {
      control: 'text',
      description:
        'Input 컴포넌트의 height를 설정합니다. 숫자로 전달하면 convertCSS 함수를 통해 px 단위로 변환하여 적용하고, px를 붙여 문자열로 전달하면 그대로 적용됩니다. Default 값은 40px입니다.',
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    padding: {
      control: 'text',
      description: 'Input 컴포넌트의 padding을 설정합니다. Default 값은 11px 16px입니다.',
    },
    value: {
      control: 'text',
      description: 'Input 컴포넌트의 value를 설정합니다.',
    },
    onChange: {
      control: false,
      description: 'Input 컴포넌트의 value가 변경될 때 호출되는 함수입니다.',
    },
  },
} satisfies Meta<typeof Input>;

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
      <Input
        width={width}
        height={height}
        padding={padding}
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
    );
  },
};

export const Example2: Story = {
  args: {
    width: '400px',
    height: '30px',
    padding: '10px 15px',
    value: 'input with width, height, padding as string',
  },
  render: ({ width, height, padding, value }) => {
    const userInput = value as string;
    const [input, setInput] = useState<string>(userInput);

    useEffect(() => {
      setInput(userInput);
    }, [userInput]);

    return (
      <Input
        width={width}
        height={height}
        padding={padding}
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
    );
  },
};

export const Example3: Story = {
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
      <Input
        width={width}
        height={height}
        padding={padding}
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
    );
  },
};
