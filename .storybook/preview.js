/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { createHead } from '@unhead/vue';
import { createPinia } from 'pinia';
const globalWindow = window;
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

const pinia = createPinia();
const head = createHead();

const globalPlugin = async(vueApp, storyContext) => {
    console.log('globalPlugin');
    await vueApp.use(pinia);
    await vueApp.use(head);
};

globalWindow.PLUGINS_SETUP_FUNCTIONS = new Set();
globalWindow.PLUGINS_SETUP_FUNCTIONS.add(globalPlugin);

export default preview;