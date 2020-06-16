<template>
  <form class="pure-form pure-form-aligned">
    <fieldset>
      <div class="pure-control-group">
        <label for="character-name">Name</label>
        <input id="character-name" @input="updateField" :value="name" placeholder="Character Name"/>
      </div>
      <div class="pure-control-group">
        <label for="character-theme">Magical Theme</label>
        <input id="character-theme" @input="updateField" :value="theme" placeholder="Magical Theme"/>
      </div>
      <div class="pure-control-group">
        <label for="character-weapon">Magical Weapon</label>
        <input id="character-weapon" @input="updateField" :value="weapon" placeholder="Magical Weapon"/>
      </div>
      <div class="pure-control-group">
        <label for="character-costume">Magical Costume</label>
        <input id="character-costume" @input="updateField" :value="costume" placeholder="Magical Costume"/>
      </div>
      <div class="pure-control-group">
        <label for="character-mark">Magical Mark</label>
        <textarea id="character-mark" rows="5" @input="updateField" :value="mark" placeholder="Magical Mark"></textarea>
      </div>
      <div class="pure-control-group">
        <label for="character-archetype">Archetype</label>
        <select id="character-archetype" @input="updateArchetype" :value="archetype">
          <option v-for="(archetype, idx) in archetypes" :key="archetype.name" :value="idx">{{archetype.name}}</option>
        </select>
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import archetypeList from '@/models/archetype-list';

@Component
export default class RPDetailsEditor extends Vue {
  get name() { return this.$store.state.character.name; }
  get theme() { return this.$store.state.character.magicTheme; }
  get weapon() { return this.$store.state.character.magicWeapon; }
  get costume() { return this.$store.state.character.magicCostume; }
  get mark() { return this.$store.state.character.magicMark; }
  get archetype() { return this.$store.state.character.archetypeIdx; }
  get archetypes() {return archetypeList;}

  updateField(e: InputEvent) {
    if(e && e.target) {
      const id = (e.target as HTMLInputElement).id;
      const key = id.replace("character-", "");
      this.$store.commit('editRPDetails', {[key]: (e.target as HTMLInputElement).value || null})
    }
  }

  updateArchetype(e: InputEvent) {
    this.$store.commit('editArchetype', {archetypeIdx: (e.target as HTMLInputElement).value || null})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
