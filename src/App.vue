<template>
  <div id="app">
    <pagehead></pagehead>
    <router-view/>
  </div>
</template>

<script>
import pagehead from './components/pagehead';

export default {
  name: 'App',
  components: {
    pagehead,
  },
};
</script>

<style>

</style>
