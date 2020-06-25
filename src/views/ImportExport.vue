<template>
  <div class="import-export">
    <div class="page-header">
      <h1>Import/Export</h1>
    </div>
    <div class="page-body">
      <form class="pure-form">
        <div class="pure-g">
          <div class="pure-u-1"> 
            <h2>Import</h2>
            <fieldset class="pure-group">
              <textarea id="import-area" class="mb1 fill-width" rows="10" v-model="importJson" placeholder="Paste JSON data here."></textarea>
            </fieldset>
            <button type="button" class="fill-width pure-button pure-button-primary" v-on:click="performImport()">Import</button>
          </div>
          <div class="pure-u-1"> 
            <h2>Export</h2>
            <fieldset class="pure-group">
              <textarea id="export-area" readonly class="mb1 fill-width" rows="10" :value="exportJson" placeholder="Paste JSON data here."></textarea>
            </fieldset>
            <button type="button" class="fill-width pure-button pure-button-primary" v-on:click="copyJsonExport()">Copy to Clipboard</button>
            <div v-if="error">
              <p>{{error}}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CharacterSheet } from '@/models/character-schema'

@Component({
  name: "ImportExport"
})
export default class ImportExport extends Vue {
  private importJson = "";
  private error = "";

  private get exportJson() {
    return JSON.stringify(this.$store.state.character)
  }

  private performImport() {
    try {
      const newCharacter = (JSON.parse(this.importJson) as CharacterSheet);
      this.$store.commit("setCharacter", {
        character: newCharacter
      })
    }
    catch(err) {
      alert("Failed import. Double check your JSON please.")
      console.error(err);
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
  margin-left: 25%;
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