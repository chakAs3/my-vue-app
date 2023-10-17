// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return { count: 0, currentUser: "eddy" }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
    },
})