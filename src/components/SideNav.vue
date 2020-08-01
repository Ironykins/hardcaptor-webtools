<template>
  <div class="pure-menu custom-restricted-width">
    <span class="pure-menu-heading">HARDCAPTOR</span>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link class="pure-menu-link" to="/">Edit Character</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link class="pure-menu-link" to="/summary">View Character</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link class="pure-menu-link" to="/selectchar">Select Character</router-link>
      </li>
      <li class="pure-menu-item menu-item-divided">
        <router-link class="pure-menu-link" to="/enemyref">Enemy Abilities</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link class="pure-menu-link" to="/magicalburst">Magical Burst</router-link>
      </li>
      <li v-if="isTempest" class="pure-menu-item">
        <router-link class="pure-menu-link" to="/tempestsurge">Tempest Surge</router-link>
      </li>
      <li class="pure-menu-item menu-item-divided">
        <router-link class="pure-menu-link" to="/importexport">Import/Export</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link class="pure-menu-link" to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SideNav extends Vue {
  private get isTempest() {
    return this.$store.getters.character.archetypeIdx === 5
  }

  private get routeMatch() {
    return this.$route.name
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
  All anchors inside the menu should be styled like this.
  */
   a {
      color: #999;
      border: none;
      padding: 0.6em 0 0.6em 0.6em;
  }

  /*
  Remove all background/borders, since we are applying them to #menu.
  */
    .pure-menu,
    .pure-menu ul {
      border: none;
      background: transparent;
  }

  /*
  Add that light border to separate items into groups.
  */
  .pure-menu ul,
  .pure-menu .menu-item-divided {
      border-top: 1px solid #333;
  }
  
  /*
  Change color of the anchor links on hover/focus.
  */
  li a:hover,
  li a:focus {
    background: #333;
  }

  .router-link-exact-active {
    background: purple;
    color: white;
  }

  .router-link-exact-active:hover,
  .router-link-exact-active:focus {
    background: purple;
    color: white;
  }

  /*
  This styles the menu heading.
  */
  .pure-menu-heading {
      font-size: 110%;
      color: #fff;
      padding: 0.9em 0.8em;
  }

</style>
