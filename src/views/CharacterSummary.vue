<template>
  <div>
    <Character/>
  </div>
</template>

<script>
// @ is an alias to /src
import Character from '@/components/viewCharacter/Character.vue'

export default {
  name: 'CharacterSummary',
  
  components: {
    Character
  }
}
</script>
