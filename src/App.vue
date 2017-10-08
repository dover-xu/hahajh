<template>
  <div id="app">
    <HeadPanel></HeadPanel>
    <router-view></router-view>
    <FootPanel></FootPanel>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars,indent */
  import HeadPanel from '@/components/HeadPanel'
  import FootPanel from '@/components/FootPanel'

  export default {
    name: 'app',
    components: {HeadPanel, FootPanel}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
