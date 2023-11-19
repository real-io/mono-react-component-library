// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import ArrowRight from "./ArrowRight";

const meta: Meta<typeof ArrowRight> = {
  title: "icons/ArrowRight",
  component: ArrowRight,
};


export default meta;
type Story = StoryObj<typeof ArrowRight>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    test: 'Test'
  },
};
