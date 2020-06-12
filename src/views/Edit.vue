<template>
  <div class="edit">
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <div class="pure-control-group">
          <label for="character-name">Name</label>
          <input id="character-name" v-model="name" placeholder="Character Name"/>
        </div>
        <div class="pure-control-group">
          <label for="character-theme">Magical Theme</label>
          <input id="character-theme" v-model="theme" placeholder="Magical Theme"/>
        </div>
        <div class="pure-control-group">
          <label for="character-weapon">Magical Weapon</label>
          <input id="character-weapon" v-model="weapon" placeholder="Magical Weapon"/>
        </div>
        <div class="pure-control-group">
          <label for="character-costume">Magical Costume</label>
          <input id="character-costume" v-model="costume" placeholder="Magical Costume"/>
        </div>
          <div class="pure-control-group">
          <label for="character-mark">Magical Mark</label>
          <textarea id="character-mark" v-model="mark" placeholder="Magical Mark"></textarea>
        </div>
        <div class="pure-controls">
          <button class="pure-button pure-button-primary" v-on:click="randomizeCharacter()">Randomize</button>
          <button v-on:click="saveDetails" class="pure-button">Save</button>
        </div>
      </fieldset>
    </form>
    <AttributesEditor :character="character"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AttributesEditor from '@/components/AttributesEditor.vue';

@Component({
  name: "EditCharacter",
  components: {
    AttributesEditor
  }
})
export default class EditCharacter extends Vue {
  private name = ""
  private theme = ""
  private weapon = ""
  private costume = ""
  private mark = ""
  private advancements = 0

  constructor() {
    super();
    this.name = this.$store.state.character.name;
    this.theme = this.$store.state.character.magicTheme;
    this.weapon = this.$store.state.character.magicWeapon;
    this.costume = this.$store.state.character.magicCostume;
    this.mark = this.$store.state.character.magicMark;
  }

  get character() {
    return this.$store.state.character
  }

  private randomizeCharacter() {
    this.$store.commit('randomizeCharacter');
    this.name = this.$store.state.character.name;
    this.theme = this.$store.state.character.magicTheme;
    this.weapon = this.$store.state.character.magicWeapon;
    this.costume = this.$store.state.character.magicCostume;
    this.mark = this.$store.state.character.magicMark;
  }

  private saveDetails() {
    this.$store.commit({
      type: 'editRPDetails',
      name: this.name,
      theme: this.theme,
      weapon: this.weapon,
      costume: this.costume,
      mark: this.mark,
    })
  }
}
</script>
