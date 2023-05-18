<template>
  <h1>eleTemplate</h1>
  <h1>eleTemplate</h1>
  <h1>eleTemplate</h1>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  setup(){
    const router = useRouter();
    const login = () => {
      router.push('/login');
    };
    const regis = () => {
      router.push('/regis');
    };
    return{
      login,regis
    }
  },
  name: "EleTemplate",
  components:{
  }
}
</script>

<style scoped>

</style>