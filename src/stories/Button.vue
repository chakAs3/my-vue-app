<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
  count {{ user.count }}
</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';
import { useUserStore } from '../stores/user';
export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);

    const user = useUserStore()

    user.count++
    
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary,
        'storybook-button--secondary': !props.primary,
        [`storybook-button--${props.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
        
        user.count++;
      },
      user
    };
  },
};
</script>
