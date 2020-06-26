<template>
  <div class="container">
    <h1>Enemy Ability Reference</h1>
    <p><b>Afflict X</b> - Where X is any status effect. During the opposition phase, the enemy may inflict the X status effect on a magical girl. They may spend two guard tokens to prevent this. An enemy may have this ability multiple times, but each instance of the ability must specify a different status effect. (eg. An enemy can have both Afflict Weakened and Afflict Branded)</p>
    <p><b>Armor X</b> - Dice values that match X can not be cancelled out of the enemy’s dice pool. Eg. Armor 1 means that dice in the pool showing their 1 face can not be cancelled, and must first be re-rolled to another number. An enemy with armor 1-3 means that dice showing 1’s, 2’s, and 3’s can not be cancelled. (Note that these dice can still be removed by other means.)</p>
    <p><b>Binding X</b> - During the opposition phase, the enemy may pick up to X unspent dice that are in the hands of players without guard tokens. Those dice persist their current values into the next roll phase, can not be rerolled, and must be included in the player’s final hand.</p>
    <p><b>Bolstering</b> - During the opposition phase, the enemy may spend 1 power to roll an additional die into their dice pool</p>
    <p><b>Carapace X</b> - A maximum of X dice can be canceled from the enemy dice pool each round.</p>
    <p><b>Cunning X</b> - During the opposition phase, the enemy may re-roll X dice in their dice pool without spending power.</p>
    <p><b>Defensive</b> - During the opposition phase, the enemy may change the value of one die in their dice pool to 6.</p>
    <p><b>Devour</b> - During the opposition phase, the enemy may spend 1 power to devour a magical girl. The magical girl can spend a guard token to negate this. That magical girl rolls 5 of her dice into the enemy’s dice pool. Other dice in the enemy’s dice pool may not be removed until these dice are removed. A devoured magical girl rolls 1 less die on her roll phase for each of her dice in the enemy’s dice pool. Once they have all their dice back, they are no longer devoured. During the roll phase, a devoured player may reroll any number of their dice in the enemy dice pool. The enemy may only devour one magical girl at a time.</p>
    <p><b>Diminutive X</b> - When the enemy’s dice pool is first rolled, they must immediately reroll any dice of value X or more.</p>
    <p><b>Ferocious X</b> - When the enemy’s dice pool is first rolled, they may immediately reroll any dice of value X or less.</p>
    <p><b>Immolating X</b> - Once per round, during the opposition phase, the enemy may remove X dice from their dice pool to gain 1 extra power for this round.</p>
    <p><b>Parting Gift X</b> - When the opposition is defeated, each magical girl gets attacked X times.</p>
    <p><b>Piercing</b> - At the end of the opposition phase, if a magical girl spent a guard token to negate an enemy attack this round, she must discard an additional guard token.</p>
    <p><b>Potent X</b> - This enemy’s power is equal to the number of dice in its dice pool with value X.</p>
    <p><b>Power Steal</b> - During the opposition phase, the enemy may take a single die from a player’s reserves and roll it into their dice pool. That player may spend a guard token to negate this. When this die is removed, it goes back to that player’s reserves. The enemy may only steal one die at a time from each player. </p>
    <p><b>Regeneration X</b> - During the opposition phase, roll X new dice into the enemy’s dice pool</p>
    <p><b>Retaliating X (Y)</b> - When a player cancels a die with value X from the enemy’s dice pool, they are afflicted with the Y Status Effect. They may spend a guard token to avoid this. An enemy may have this ability multiple times, but each instance of the ability must specify a different status effect. Eg. An enemy can have both Retaliating 1 (Branded) and Retaliating 2 (Weakened)</p>
    <p><b>Second Health Bar</b> - When all dice in the enemy’s pool are depleted, re-roll the enemy’s dice pool at the start of the opposition phase and the enemy loses this ability.</p>
    <p><b>Spiked X</b> - When a player cancels  a die with value X from the enemy’s dice pool, they take a bane. They may spend a guard token to avoid this.</p>
    <p><b>Undying X</b> - During the opposition phase, if the enemy has less than X dice in its dice pool, roll dice into its dice pool until it contains X dice.</p>
    <p><b>Volatile X</b> - At the start of the opposition phase, if X dice were removed from the enemy’s dice pool this round, a magical burst occurs.</p>
    <p><b>Vulnerability X</b> - Specified with a list of dice. A magical girl may spend these dice to instantly remove X dice from the opposition’s dice pool. (eg. Vulnerability 5: [1,1,3,5])</p>
    <p><b>Weak Point</b> - Specified with a list of dice. Any player may spend these dice to activate the weak point. Players may not remove dice from the opposition’s dice pool unless the weak point has been activated this round.</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 768px;
}
</style>