<template>
  <div id="app" v-bind:class="{active: sidenavActive}">
    <a v-on:click="toggleSidenav" id="menuLink" class="menu-link">
      <!-- Hamburger icon -->
      <span></span>
    </a>
    <div id="sidenav" v-bind:class="{active: sidenavActive}">
      <SideNav/>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideNav from '@/components/SideNav.vue'

@Component({
  name: "App",
  components: {
    SideNav
  }
})
export default class App extends Vue {
  private sidenavActive = false;

  private toggleSidenav() {
    this.sidenavActive = !this.sidenavActive;
  }
}
</script>

<style>
#content {
  margin: 8px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
    position: relative;
    left: 0;
    padding-left: 0;
}

#app.active #sidenav {
    left: 150px;
    width: 150px;
}

#app.active .menu-link {
    left: 150px;
}

#sidenav {
    margin-left: -150px; /* "#menu" width */
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000; /* so the menu or its navicon stays above all content */
    background: #191818;
    overflow-y: auto;
}

.menu-link {
    position: fixed;
    display: block; /* show this only on small screens */
    top: 0;
    left: 0; /* "#menu width" */
    background: #000;
    background: rgba(0,0,0,0.7);
    font-size: 10px; /* change this value to increase/decrease button size */
    z-index: 10;
    width: 2em;
    height: auto;
    padding: 2.1em 1.6em;
}

    .menu-link:hover,
    .menu-link:focus {
        background: #000;
    }

    .menu-link span {
        position: relative;
        display: block;
    }

    .menu-link span,
    .menu-link span:before,
    .menu-link span:after {
        background-color: #fff;
        width: 100%;
        height: 0.2em;
    }

        .menu-link span:before,
        .menu-link span:after {
            position: absolute;
            margin-top: -0.6em;
            content: " ";
        }

        .menu-link span:after {
            margin-top: 0.6em;
        }

@media (min-width: 48em) {
    #app {
        padding-left: 150px; /* left col width "#menu" */
        left: 0;
    }
    #sidenav {
        left: 150px;
    }

    .menu-link {
        position: fixed;
        left: 150px;
        display: none;
    }

    #app.active .menu-link {
        left: 150px;
    }
}

@media (max-width: 48em) {
    /* Only apply this when the window is small. Otherwise, the following
    case results in extra padding on the left:
        * Make the window small.
        * Tap the menu to trigger the active state.
        * Make the window large again.
    */
    #app.active {
        position: relative;
        left: 150px;
    }
}

#app,
#sidenav,
.menu-link {
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}
</style>
