import { useUserStore } from '../stores/user';
import PricingView from '../components/HelloWorld.vue';

export default {
    title: 'Views/Pricing',
};

const Template = (args) => ({
    components: { PricingView },
    setup() { return { args }; },
    template: '<pricing-view v-bind="args" />',
});

export const Pricing = Template.bind({});
export const DarkTheme = Template.bind({});

DarkTheme.parameters = { theme: 'dark' };
Pricing.loaders = [
    async() => {
        const userStore = useUserStore();

        userStore.currentUser = {};
    },
];

DarkTheme.parameters = { theme: 'dark' };
DarkTheme.loaders = [
    async() => {
        const userStore = useUserStore();

        userStore.currentUser = {};
    },
];