<template>
  <router-view></router-view>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import EleTemplate from "./components/EleTemplate.vue";

export default {
  name: 'App',
  components: {
    EleTemplate,
    HelloWorld,

  }
}
</script>
