<template>
  <div class="home">
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
