import type { Meta, StoryObj } from '@storybook/react';

import ElevatedSlopeTabsDemo from "./components/ElevatedSlopeTabsDemo";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ElevatedSlopeTabsDemo> = {
    component: ElevatedSlopeTabsDemo,
};

export default meta;
type Story = StoryObj<typeof ElevatedSlopeTabsDemo>;

export const Primary: Story = {
    name: 'ElevatedSlopeTabsView',
    args: {
        primary: true,
        label: 'Button',
    },
};