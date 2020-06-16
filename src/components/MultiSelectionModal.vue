<template>
  <div>
    <button v-on:click="showModal">Select {{this.selectionName}}</button>

    <div class="modal" v-bind:class="{active: displayModal}">
      <div class="modal-content">
        <span class="close" v-on:click="hideModal">&times;</span>
        <h3>{{selectedItems.length}} / {{allowedSelections}} {{this.selectionName}} Selected</h3>
        <div class="modal-body">
          <div v-for="(item, idx) in allItems" :key="item.name">
            <div class="option" v-on:click="toggleItem(idx)" v-bind:class="{selected: itemSelected(idx)}">
              <p>
                <b>{{ item.name }}</b>: {{item.description}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class MultiSelectionModal extends Vue {
  @Prop() private allItems!: {name: string; description: string}[];
  @Prop() private selectedItems!: number[];
  @Prop() private allowedSelections!: number;
  @Prop() private toggleItem!: (idx: number) => void;
  @Prop({default: "Items"}) private selectionName!: string;
  private displayModal = false;

  // True if the character has this item marked as selected.
  private itemSelected(idx: number): boolean {
    return this.selectedItems.indexOf(idx) !== -1;
  }

  hideModal() {
    this.displayModal = false;
  }

  showModal() {
    this.displayModal = true;
  }
}
</script>

<style scoped>
 /* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1001; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal.active {
  display: block;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  z-index: 1002;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animatetop;
  animation-duration: 0.4s
}

.modal-body {
  overflow: auto; /* Enable scroll if needed */
  max-height: 80vh;
}

/* Add Animation */
@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}

.option {
  /* margin: 20px 0px; */
  padding: 5px 5px;
  border-radius: 1em;
  cursor: pointer;
  /* border-top: 1px solid rgba(0, 0, 0, 0.25); */
}

.option.selected {
  background: #c58dc0;
}

.option:hover {
  background: #ffe4fd;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
} 
</style>