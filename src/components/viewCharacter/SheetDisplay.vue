<template>
  <div class="characterSheet">
    <div class="page-header">
      <h1>{{ character.name }}</h1>
    </div>
    
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1-2"> 
        <div class="p1">
          <Attributes :character="character"/>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-2"> 
        <div class="p1">
          <RPDetails :character="character"/>
        </div>
      </div>
    </div>
    <div class="pure-g">
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
          Mark 3 Experience when you...
          <ul>
            <li v-for="trigger in this.archetype.expTriggers" :key="trigger">
              {{trigger}}
            </li>
          </ul>

          <div v-for="feature in features" :key="feature.name">
            <p>
              <b>{{ feature.name }}</b>: {{feature.description}}
            </p>
          </div>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-1-3"> 
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
    </div>
  


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Character, Archetype, Talent, Feature, Ability } from '@/models/character-schema';
import ArchetypeList from '@/models/archetype-list';
import talentList from '@/models/talent-list';
import RPDetails from '@/components/viewCharacter/RPDetails.vue';
import Attributes from '@/components/viewCharacter/Attributes.vue';

@Component({
  components: {
    RPDetails,
    Attributes
  },
})
export default class SheetDisplay extends Vue {
  @Prop() private character!: Character;
  
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
.page-header {
  text-align: center;
}

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
