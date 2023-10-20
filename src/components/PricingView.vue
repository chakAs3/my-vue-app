<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user';
import MyButton from '../stories/Button.vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },

})


</script>

<template>


  <div class="card">

    <h1>Pinia Store </h1>
    <p>
      user count is {{ user }}
      <br>
      user name: {{ user.name }}
      <br>
      <code>components/PricingVue.vue</code> 
    </p>
    <MyButton label="Click +" primary >+</MyButton>
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
