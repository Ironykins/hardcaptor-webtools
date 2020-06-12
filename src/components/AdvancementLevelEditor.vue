<template>
  <div>
    Advancement Level: {{advancements}}
    <td><button v-on:click="removeAdvancement()">-</button></td>
    <td><button v-on:click="addAdvancement()">+</button></td>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AttributesEditor extends Vue {
  get advancements() {
    return this.$store.state.character.advancements;
  }

  addAdvancement() {
    return this.$store.commit("addAdvancement");
  }

  removeAdvancement() {
    return this.$store.commit("removeAdvancement");
  }
}
</script>
