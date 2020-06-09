<template>
  <div class="home">
    <img alt="HARDCAPTOR SAKUGA: FULL METAL PETTICOAT" src="../assets/banner.png">
    <Character/>
  </div>
</template>

<script>
// @ is an alias to /src
import Character from '@/components/character/Character.vue'

export default {
  name: 'Home',
  
  components: {
    Character
  }
}
</script>
