<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user';

defineProps({
  msg: String,
})
const user = useUserStore()
user.currentUser = { name: 'John Doe' }
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="user.count++">count is {{ user.count }}</button>
    <p>
      Pini current count is {{ user.count }}
      currentUser: {{ user.currentUser }}
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
