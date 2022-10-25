<template>
  <div>
    <div class="navBar">
      <div class="nav">
        <span @click="increment">首頁{{ count }}</span>
      </div>
      <div class="nav">
        <span>nuxt3</span>
      </div>
    </div>
    <slot />
    <div class="footer" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(1)
function increment () {
  count.value++
}
</script>
<style lang="sass" scoped>
.navBar
  display: flex
  justify-content: center
  align-items: center
  .nav
    flex: 1
    align-items: center
    display: flex
    align-items: center
    justify-content: center
    span
      font-size: 20px
      color: #3b8a2c
      cursor: pointer
.footer
  background-color: #000
  height: 10px
  width: 100%
  position: fixed
  bottom: 0
</style>
