<template>
  <div class="characterSheet">
    <h1>{{ character.name }}</h1>
    <div class="mb1"><b>Archetype:</b> {{this.archetype.name}}</div>
    <div class="mb1"><b>Advancements Taken:</b> {{this.character.advancements}}</div>
    <div class="mb1"><b>Magical Theme:</b> {{this.character.magicTheme}}</div>
    <div class="mb1"><b>Magical Weapon:</b> {{this.character.magicWeapon}}</div>
    <div class="mb1"><b>Magical Costume:</b> {{this.character.magicCostume}}</div>
    <div class="mb1"><b>Magical Mark:</b> {{this.character.magicMark}}</div>
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-3"> 
        <div class="p1">
          <h2>Attributes and Traits</h2>
          <ul>
            <li><b>Passion</b>: {{this.character.attributes.passion}}</li>
            <ul>
              <li>Nerve: {{this.character.traits.nerve}}</li>
              <li>Defiance: {{this.character.traits.defiance}}</li>
              <li>Imagination: {{this.character.traits.imagination}}</li>
            </ul>
            <li><b>Logic</b>: {{this.character.attributes.logic}}</li>
            <ul>
              <li>Analysis: {{this.character.traits.analysis}}</li>
              <li>Observation: {{this.character.traits.observation}}</li>
              <li>Subterfuge: {{this.character.traits.subterfuge}}</li>
            </ul>
            <li><b>Devotion</b>: {{this.character.attributes.devotion}}</li>
            <ul>
              <li>Adaptability: {{this.character.traits.adaptability}}</li>
              <li>Charisma: {{this.character.traits.charisma}}</li>
              <li>Empathy: {{this.character.traits.empathy}}</li>
            </ul>
          </ul>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="p1">
          <h2>Talents</h2>
          <div v-for="talent in talents" :key="talent.name">
            <p>
              <b>{{ talent.name }}</b>: {{talent.description}}
            </p>
          </div>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <div class="p1">
          <h2>{{this.archetype.name}} Features</h2>
          <div v-for="feature in features" :key="feature.name">
            <p>
              <b>{{ feature.name }}</b>: {{feature.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
  

    <h2>{{this.archetype.name}} Abilities</h2>
    <ul>
      <li v-for="ability in archetypeBaseAbilities" :key="ability.name">
        <b>{{ ability.name }}</b>: {{ability.description}}
      </li>
      <li v-for="(abilityChoice,level) in character.abilities" :key="level">
        <div v-if="archetype.abilityList[level+1] && archetype.abilityList[level+1][abilityChoice]">
          <h3>Level {{level+1}} - ({{archetype.abilityTrackNames[abilityChoice]}})</h3>
          <b>{{ archetype.abilityList[level+1][abilityChoice].name }}</b>: {{archetype.abilityList[level+1][abilityChoice].description}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CharacterSheet, Archetype, Talent, Feature, Ability } from '@/models/character-schema';
import ArchetypeList from '@/models/archetype-list';
import talentList from '@/models/talent-list';

@Component
export default class SheetDisplay extends Vue {
  @Prop() private character!: CharacterSheet;
  
  get archetype(): Archetype {
    return ArchetypeList[this.character.archetypeIdx];
  }

  get talents(): Talent[] {
    return talentList.filter((_,idx) => this.character.talents.indexOf(idx) !== -1)
  }

  get features(): Feature[] {
    return this.archetype.featureList.filter((_,idx) => this.character.features.indexOf(idx) !== -1)
  }

  get archetypeBaseAbilities(): Ability[] {
    return this.archetype.abilityList.length > 0 ? this.archetype.abilityList[0] : [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.mb1 {
  margin-bottom: 4px;
}
.p1 {
  padding: 4px;
}
</style>
