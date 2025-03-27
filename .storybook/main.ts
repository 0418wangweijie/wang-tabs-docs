import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    // ...
    // framework: '@storybook/react-webpack5', 👈 Remove this
    // 👈 Add this
    framework: '@storybook/react-vite',

    addons: ['@storybook/addon-mdx-gfm'],

    docs: {
        autodocs: true
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};

export default config;