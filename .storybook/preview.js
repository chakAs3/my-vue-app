/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import { createHead } from '@unhead/vue';
import { createPinia } from 'pinia';
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

setup((app) => {


    app.use(pinia);
    app.use(head);
});

export default preview;