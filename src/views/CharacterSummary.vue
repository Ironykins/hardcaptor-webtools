<template>
  <div>
    <Character/>
  </div>
</template>

<script>
// @ is an alias to /src
import Character from '@/components/character/Character.vue'

export default {
  name: 'CharacterSummary',
  
  components: {
    Character
  }
}
</script>
