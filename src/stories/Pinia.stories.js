import { useUserStore } from '../stores/user';
import PricingView from '../components/PricingView.vue';

export default {
    title: 'Views/Pricing',
    component: PricingView,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

export const Pricing = {
    args: {
        user: {
            name: 'John Doe',
            email: 'javavh@gmail.com'
        }
    },

    render: () => ({
        components: { PricingView },
        setup() {
            const user = useUserStore();
            user.name = 'Joe DaeK';
            user.email = 'java@gmail.om';
            user.count = 2

            const { name, email, count } = user;
            return { user: { name, email, count } };
        },
        template: '<pricing-view :user="user" />',
    })

};