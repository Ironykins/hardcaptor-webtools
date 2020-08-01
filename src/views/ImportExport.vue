<template>
  <div class="import-export">
    <div class="page-header">
      <h1>Import/Export</h1>
    </div>
    <div class="page-body">
      <p>To save, load, and share characters, simply copy and save the encoded text. It's in JSON format.</p>
      <form class="pure-form">
        <div class="pure-u-1"> 
          <h2>Export</h2>
          <fieldset class="pure-group">
            <textarea id="export-area" readonly class="mb1 fill-width" rows="10" :value="exportJson" placeholder="Paste JSON data here."></textarea>
          </fieldset>
          <button type="button" class="fill-width pure-button button-primary" v-on:click="copyJsonExport()">Copy to Clipboard</button>
          <div v-if="error">
            <p>{{error}}</p>
          </div>
        </div>
        <div class="pure-g">
          <div class="pure-u-1"> 
            <h2>Import</h2>
            <fieldset class="pure-group">
              <textarea id="import-area" class="mb1 fill-width" rows="10" v-model="importJson" placeholder="Paste JSON data here."></textarea>
            </fieldset>
            <button type="button" class="fill-width pure-button button-primary" v-on:click="performImport()">Import</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character, newCharacter as charConstructor, charAvailableAbilities } from '@/models/character-schema';
import TalentList from '@/models/talent-list';
import ArchetypeList from '@/models/archetype-list';

@Component({
  name: "ImportExport"
})
export default class ImportExport extends Vue {
  private importJson = "";
  private error = "";

  private get exportJson() {
    return JSON.stringify(this.$store.getters.character)
  }

  private performImport() {
    try {
      const imported = JSON.parse(this.importJson);
      const newCharacter = charConstructor();

      // Verify string properties.
      if(imported.name && typeof imported.name !== 'string') throw new Error("name should be a string");
      if(imported.magicMark && typeof imported.magicMark !== 'string') throw new Error("magicMark should be a string");
      if(imported.magicWeapon && typeof imported.magicWeapon !== 'string') throw new Error("magicWeapon should be a string");
      if(imported.magicTheme && typeof imported.magicTheme !== 'string') throw new Error("magicTheme should be a string");
      if(imported.magicCostume && typeof imported.magicCostume !== 'string') throw new Error("magicCostume should be a string");
      if(imported.worldTies && typeof imported.worldTies !== 'string') throw new Error("worldTies should be a string");

      // Numbers
      if((imported.advancements && typeof imported.advancements !== 'number') || imported.advancements < 0) throw new Error("advancements should be a positive number");
      if(imported.advancements) newCharacter.advancements = imported.advancements;

      if((imported.archetypeIdx && typeof imported.archetypeIdx !== 'number') 
        || imported.archetypeIdx < 0 
        || imported.archetypeIdx >= ArchetypeList.length) 
        throw new Error("archetypeIdx should be a number");

      // Archetype
      // const archetype = ArchetypeList[imported.archetypeIdx];

      // Talents! Verify these.
      if(imported.talents && imported.talents.some((x: number) => x >= TalentList.length))
        throw new Error("Invalid talent list");

      // Reference a feature by index of archetype features list.
      if(imported.features && imported.features.some((x: number) => (x >= 4 || x < 0)))
        throw new Error("Invalid feature list");

      // Index is your archetype level. 
      if(imported.abilities && imported.abilities.some((x: number) => x >= 2)
      || imported.abilities.length > charAvailableAbilities(newCharacter))
        throw new Error("Invalid ability list");

      // Traits
      if(imported.traits) {
        if(imported.traits.nerve < 0 || imported.traits.nerve > 3) throw new Error("Invalid traits");
        if(imported.traits.defiance < 0 || imported.traits.defiance > 3) throw new Error("Invalid traits");
        if(imported.traits.imagination < 0 || imported.traits.imagination > 3) throw new Error("Invalid traits");
        if(imported.traits.analysis < 0 || imported.traits.analysis > 3) throw new Error("Invalid traits");
        if(imported.traits.observation < 0 || imported.traits.observation > 3) throw new Error("Invalid traits");
        if(imported.traits.subterfuge < 0 || imported.traits.subterfuge > 3) throw new Error("Invalid traits");
        if(imported.traits.adaptability < 0 || imported.traits.adaptability > 3) throw new Error("Invalid traits");
        if(imported.traits.charisma < 0 || imported.traits.charisma > 3) throw new Error("Invalid traits");
        if(imported.traits.empathy < 0 || imported.traits.empathy > 3) throw new Error("Invalid traits");
      }

      // Assignments.
      if(imported.name) newCharacter.name = imported.name;
      if(imported.magicMark) newCharacter.magicMark = imported.magicMark;
      if(imported.magicWeapon) newCharacter.magicWeapon = imported.magicWeapon;
      if(imported.magicTheme) newCharacter.magicTheme = imported.magicTheme;
      if(imported.magicCostume) newCharacter.magicCostume = imported.magicCostume;
      if(imported.worldTies) newCharacter.worldTies = imported.worldTies;
      if(imported.archetypeIdx) newCharacter.archetypeIdx = imported.archetypeIdx;
      if(imported.talents) newCharacter.talents = imported.talents;
      if(imported.features) newCharacter.features = imported.features;
      if(imported.abilities) newCharacter.abilities = imported.abilities;
      if(imported.traits) newCharacter.traits = imported.traits;

      this.$store.commit("setCharacter", {
        character: newCharacter
      })
      this.$router.push('summary')
    }
    catch(err) {
      alert(`Failed import. Double check your JSON please. ${err}`)
    }
  }

  copyJsonExport () {
    const testingCodeToCopy = document.querySelector('#export-area')
    if(!testingCodeToCopy) return;
    testingCodeToCopy.setAttribute('type', 'text');

    (testingCodeToCopy as HTMLTextAreaElement).select()

    try {
      document.execCommand('copy');
    } catch (err) {
      this.error = "Problem copying. Please copy manually."
    }

    /* unselect the range */
    testingCodeToCopy.setAttribute('type', 'hidden')
    const selection = window.getSelection();
    if(selection) {
      selection.removeAllRanges()
    }
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
}

.page-body {
  text-align: center;
  margin: auto;
  margin-top: 2em;
  width: 480px;
}

.fill-width {
  width: 100%;
}

.mb1 {
  margin-bottom: 4px;
}
</style>