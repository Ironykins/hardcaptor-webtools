<template>
  <div class="magical-burst">
    <div class="page-header">
      <h1>Tempest Surge Generator</h1>
      <button type="button" class="pure-button button-primary" v-on:click="generate()">Generate</button>
    </div>
    <div class="page-body">
      {{tempestSurge}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getTempestSurge } from '@/models/magical-burst';

@Component({
  name: "TempestSurge"
})
export default class TempestSurge extends Vue {
  private tempestSurge = getTempestSurge();

  private generate() {
    this.tempestSurge = getTempestSurge();
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
}

.page-body {
  text-align: center;
  margin: 2em;
}
</style>