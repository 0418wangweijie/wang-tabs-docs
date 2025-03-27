import type { Meta, StoryObj } from '@storybook/react';

import SlopeTabsDemo from './components/SlopeTabsDemo';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SlopeTabsDemo> = {
    component: SlopeTabsDemo,
};

export default meta;
type Story = StoryObj<typeof SlopeTabsDemo>;

export const Primary: Story = {
    name: 'SlopeTabsView',
    args: {
        primary: true,
        label: 'Button',
    },
};