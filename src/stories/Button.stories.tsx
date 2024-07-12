import { userEvent, within, expect } from '@storybook/test';
import { useState } from 'react';

import Button from '../components/Button/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: false,
      description: 'Button 컴포넌트의 DOM tag를 설정합니다.',
      table: {
        type: {
          summary: 'ElementType<any>',
        },
      },
    },
    isGrayOut: {
      control: 'boolean',
      description: 'Button 컴포넌트의 GrayOut 여부를 설정합니다. 기본 값은 false 입니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onClick: {
      control: false,
      description: 'Button 컴포넌트 클릭 시 설정된 동작을 수행합니다.',
    },
    backgroundColor: {
      control: 'text',
      description:
        'background-color를 설정합니다. Default 값은 pi 입니다. color 객체에 존재하는 key로 색상을 변경할 수 있습니다.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    width: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    height: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    minWidth: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    minHeight: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    maxWidth: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    maxHeight: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    padding: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    paddingTop: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    paddingRight: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    paddingBottom: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    paddingLeft: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    as: 'div',
    isGrayOut: false,
  },
  render: (args) => (
    <div style={{ width: 'max-content', height: 'max-content' }}>
      <Button {...args} onClick={() => alert('Button clicked!')}>
        Button
      </Button>
    </div>
  ),
};

export const Example2: Story = {
  args: {
    as: 'div',
    isGrayOut: true,
  },
  render: ({ as, isGrayOut }) => {
    const [count, setCount] = useState<number>(0);

    return (
      <>
        <div
          data-testid="count"
          style={{ display: 'flex', justifyContent: 'center', width: '400px', height: '50px', fontSize: '20px' }}
        >
          {count}
        </div>
        <div style={{ display: 'flex', width: '400px', height: 'max-content', gap: '12px' }}>
          <Button
            data-testid="photoravel-button"
            as={as}
            isGrayOut={isGrayOut}
            onClick={() => setCount((prev) => prev + 1)}
            style={{ flex: 2 }}
          >
            Increase
          </Button>
          <Button
            data-testid="photoravel-button"
            as={as}
            isGrayOut={isGrayOut}
            onClick={() => setCount((prev) => prev - 1)}
            style={{ flex: 1 }}
          >
            Decrease
          </Button>
        </div>
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttons = await canvas.findAllByTestId('photoravel-button');
    const count = await canvas.findByTestId('count');
    const [increase, decrease] = [buttons[0], buttons[1]];

    await userEvent.click(increase, { delay: 100 });
    expect(count.innerHTML).toBe('1');
    await userEvent.click(increase, { delay: 100 });
    expect(count.innerHTML).toBe('2');
    await userEvent.click(decrease, { delay: 100 });
    expect(count.innerHTML).toBe('1');
    await userEvent.click(decrease, { delay: 100 });
    expect(count.innerHTML).toBe('0');
  },
};
