import { Archetype } from "@/models/character-schema";

// Data. List of archetypes in the game.
export default [
  {
    name: "Knight",
    // Mark 3 experience when you...
    expTriggers: [
      "Experience a major shift in worldview as a result of protecting something.",
      "Fail to protect something important to you and lose it."
    ],
    featureList: [
      {
        name: "Claim Suffering",
        description: "Whenever an ally you can see would mark a point of overcharge, stress, or harm, you may suffer two banes instead."
      },
      {
        name: "Knight’s Vigil",
        description: "As a downtime action, you may designate a person or object to be your Ward. They remain your ward until you fail to protect them or you designate a new ward. If the GM puts your ward in danger, they must tell you, and you can decide to start a scene in which you show up at the last possible moment to try to save or protect them."
      },
      {
        name: "Petrifying Seal",
        description: "You may spend a minute and mark 1 overcharge to turn a willing or helpless being into a stone statue. While in this state, they cannot be detected or harmed by magic. They remain in this state for 1 year or until you end the effect by marking 1 overcharge and touching them. While in this state, they are unconscious, but they can still dream."
      },
      {
        name: "Knight’s Reward",
        description: "Whenever an ally activates an experience trigger for their archetype or has hope fallout, you may mark 2 hope."
      },
      
    ],
    abilityTrackNames: ["Shieldbearer", "Champion"],
    abilityList: [
      // Level 0. Everyone gets all of these.
      [
        {
          name: "Vanguard",
          description: "During the action phase, an ally of your choice may spend a single die from your hand as if it were their hand. If they do, grant them a guard token."
        },
        {
          name: "Shining Armor",
          description: "During the action phase, you may spend a straight to grant 3 guard tokens to each player and liability."
        },
        {
          name: "Aegis",
          description: "At any point during combat, you may spend 1 guard token. If you do, your allies may spend your guard tokens as though they were their own this round."
        },
      ],
      // Level 1
      [
        {
          name: "Be My Sword",
          description: "Whenever you rally, each other ally that rallied may reroll one die in the enemy’s dice pool."
        },
        {
          name: "Blindside",
          description: "Whenever you rally, if at least one other ally also rallied, your allies may spend your guard tokens as though they were their own this round."
        }
      ],
      // Level 2
      [
        {
          name: "Interpose",
          description: "At the start of the action phase, as long as you are not branded, you may grant the warded condition to another magical girl. If you do, remove the warded condition from yourself and gain the branded condition."
        },
        {
          name: "Painful Clarity",
          description: "During the end phase, if you marked 2 or more total points of Stress, harm, or overcharge this round, you may gain that many guard tokens."
        }
      ],
      // Level 3
      [
        {
          name: "Aura of Courage",
          description: "Magical Girls who can see and hear you gain one guard token at the end phase if they took at least one bane this round."
        },
        {
          name: "Second Wind",
          description: "Once per combat you may spend 1 die to clear 1 point of harm from yourself or gain 2 guard tokens."
        }
      ],
      // Level 4
      [
        {
          name: "Bulwark",
          description: "You begin combat with 2 guard tokens, and allies that can see and hear you begin combat with 1 guard token."
        },
        {
          name: "Indomitable",
          description: "When you grant another player a guard token for the first time in a round, you may also gain one guard token."
        },
      ],
      // Level 5
      [
        {
          name: "Barrier",
          description: "During the action phase, you may mark 1 overcharge and spend a straight to create a barrier. Enemies may not attack liabilities or magical girls until the barrier is destroyed. The barrier is destroyed when it takes 4 harm, and the opposition may spend its power to inflict harm on the barrier."
        },
        {
          name: "Grin and Bear It",
          description: "Whenever you would fill your last harm clock segment, roll a d6. On a result of 4-6, you may choose not to fill the segment."
        },
      ],
    ]
  },
  {
    name: "Lodestar",
    // Mark 3 experience when you...
    expTriggers: [
      "Create a place of belonging for people that previously didn’t have one.",
      "Learn from a mistake you made that hurt someone."
    ],
    featureList: [
      {
        name: "Healing Wave",
        description: "Once per episode, you may mark 1 overcharge to clear up to 1 harm from any number of characters in the vicinity. This ability also repairs buildings, trees, structures, et cetera. If you do this in combat, roll 4 dice into each enemy dice pool."
      },
      {
        name: "Second Chance",
        description: "Once per scene, you may mark 1 overcharge to allow an ally who can see and hear you to reroll a test they just made. They make this reroll with 1 fewer die."
      },
      {
        name: "Empath",
        description: "You can read the emotions of ordinary people, and you always know when they are lying to you. If you attempt to read the mind of a magical girl or magical creature, they know immediately. They can either allow you to read their thoughts, block your attempt, or lie to you and feed you false information."
      },
      {
        name: "Overwhelming Charisma",
        description: "Non-magical strangers perceive you as incredibly charming, charismatic, and attractive. They are well-disposed, inclined to trust you, and will happily do favours for you. Additionally, take +1 die whenever being charming would aid you in a test."
      }
    ],
    abilityTrackNames: ["Captain", "Medic"],
    abilityList: [
      // Level 0. Everyone gets all of these.
      [
        {
          name: "Rear Guard",
          description: "At the end of the action phase, if you removed less than 2 dice from an enemy dice pool this round, you may grant 1 guard token to a magical girl or liability."
        },
        {
          name: "Carry the Banner",
          description: `You may spend a straight to do all of the following:\n
          Clear a status effect on a magical girl\n
          Grant a status effect to a magical girl\n
          Distribute 2 guard tokens to magical girls or liabilities\n
          Clear 1 harm from a magical girl’s harm clock\n
          Remove a die from the opposition’s dice pool
          `
        },
        {
          name: "Bolster",
          description: "During the action phase, you may spend 2 guard tokens to grant a magical girl any status effect."
        },
      ],
      // Level 1
      [
        {
          name: "Believe in the Me that Believes in You",
          description: "Gain the following rally action: Grant an ally a positive status effect if they don’t already have one."
        },
        {
          name: "Magic Salve",
          description: "When you rally, you may clear 1 harm from each ally who also rallied."
        }
      ],
      // Level 2
      [
        {
          name: "Call the Shot",
          description: "The first time you reroll a die in an enemy’s dice pool during the action phase, an ally may immediately spend a die matching its new value to cancel it."
        },
        {
          name: "Adrenaline Aura",
          description: "At the end of the roll phase, Magical Girls with at least one guard token may increase or decrease the value of one of their dice by 1."
        }
      ],
      // Level 3
      [
        {
          name: "Stronger Together",
          description: "At the end of the action phase, each magical girl with a status effect may flip one die in the enemy’s dice pool to its opposite side."
        },
        {
          name: "Sympathetic Bond",
          description: "The first time in a round that you gain a guard token, another ally of your choice may also gain a guard token."
        }
      ],
      // Level 4
      [
        {
          name: "Press the Advantage",
          description: "During the action phase, you may remove a positive status effect from a magical girl. That magical girl may then remove a die from the opposition’s dice pool."
        },
        {
          name: "Do No Harm",
          description: "Once per round, during the action phase, you may grant 1 guard token to a magical girl or liability. If you do, roll 1 die into an enemy dice pool."
        },
      ],
      // Level 5
      [
        {
          name: "Seize Victory",
          description: "If all players have a status effect, a finisher requires three of a kind in each player’s hand instead of four."
        },
        {
          name: "Coordinated Feint",
          description: "Once per combat, at the end of the roll phase, you may suffer a bane to go back to the start of the roll phase. Players re-roll all their dice as normal."
        },
      ],
    ]
  },


  {
    name: "Muse",
    // Mark 3 experience when you...
    expTriggers: [
      "Inspire someone else to make a drastic positive change in their own life",
      "Regain your inner light after losing it"
    ],
    featureList: [
      {
        name: "Muse's Revelry",
        description: `
        When you perform music, display your art, make a speech, or otherwise express yourself to a group of people, roll a test with 3 dice.
        1-3: You do not have the desired effect. The crowd’s energy fades, and the meaning of your performance is somehow lost or twisted.
        4-5: You evoke strong positive emotions in your audience. They are enthralled by you and your performance will have a lasting impact on them.
        6: The group’s inspiration becomes magical in nature. A group of ordinary people inspired this way can even stand against a magical foe. If this group is present in combat, they are not considered a liability. Instead, they may remove your choice of 1 die per round from an enemy dice pool.
        Critical: As above, but the group is excited to a fervor. They will need two days rest after the performance.`
      },
      {
        name: "Illusionist",
        description: "You may create and control realistic three dimensional images complete with sound. You may also alter your own voice, face, and costume to anything you desire. Physical interaction with any of these effects reveals them to be incorporeal illusions."
      },
      {
        name: "Safehaven",
        description: "You gain access to an extradimensional space. The space is about the size of a large loft apartment, and you can choose exactly what it looks like. You may travel to this space from anywhere by spending 10 minutes in quiet concentration, and you may take any number of willing characters with you. The space is comfortable and well-equipped with any mundane supplies and tools. You may also designate a space in the real world that can be used as an entrance to this extradimensional space, but only for the characters you specify."
      },
      {
        name: "Talk to Anything",
        description: "With your magic, you can speak to anything, including animals and inanimate objects. You might ask a playground what it felt last night, ask the squirrels if they have heard any rumors lately, or ask that the crows bring you specific objects. Though effective, communication with these entities is often cryptic and obtuse."
      },
    ],
    abilityTrackNames: ["Harmony", "Discord"],
    abilityList: [
      // Level 0. Everyone gets all of these.
      [
        {
          name: "Muse's Inspiration",
          description: "Up to twice per round, you may let any ally spend a die from your hand as if it were in that ally’s hand."
        },
        {
          name: "Crescendo",
          description: "During the action phase, you may spend a straight to reduce an enemy’s power by 3 until the end of the round."
        },
        {
          name: "Eloquent Sway",
          description: "During the action phase, you may spend a guard token to increase or decrease the value of one die in an enemy dice pool by 1."
        },
      ],
      // Level 1
      [
        {
          name: "Harmonize",
          description: "Whenever you rally, all magical girls that rallied may freely spend each other's dice this round, as though those dice were in their own hand."
        },
        {
          name: "Captivate",
          description: "Whenever you rally, all enemies are captivated during the next opposition phase. While captivated, an enemy can not re-roll or change values in its dice pool without your approval, and whenever it targets a magical girl with an ability or attack, you may pick a different magical girl for it to target."
        },
      ],
      // Level 2
      [
        {
          name: "Refrain",
          description: "At the end of the action phase, if at least two of your dice were spent by other players this phase, you may gain 1 guard token"
        },
        {
          name: "Fermata",
          description: "Once per round, you may spend a single die to reroll a die of equal or lesser value in an enemy’s dice pool."
        },
      ],
      // Level 3
      [
        {
          name: "Adagio",
          description: "At any point during the roll phase, you may remove one die from your reserves to allow any ally an extra reroll."
        },
        {
          name: "Half-Step",
          description: "Whenever you would reroll a die in an enemy dice pool, you may instead flip it to its opposite side."
        },
      ],
      // Level 4
      [
        {
          name: "Cadenza",
          description: "During the action phase, all magical girls may spend a pair. If they do, grant each magical girl the Inspired status condition."
        },
        {
          name: "Leitmotif",
          description: "Whenever an ally spends a die from your hand, set its value to 1 and return it to your hand. Allies may not spend this die again this round, even if an ability would otherwise permit it."
        },
      ],
      // Level 5
      [
        {
          name: "Ensemble",
          description: "Once per combat, at the start of the action phase, you may declare that this round, you and all your allies may spend dice from any ally’s hand as though it were their own."
        },
        {
          name: "Power Chord",
          description: "You may spend three of a kind to reroll up to five dice in the opposition’s dice pool."
        },
      ],
    ]
  },

  {
    name: "Oathbound",
    // Mark 3 experience when you...
    expTriggers: [
      "Forgive someone who you came into conflict with as a result of your Oath",
      "Jeopardize your Oath by prioritizing another worthwhile cause"
    ],
    featureList: [
      {
        name: "Bloodhound",
        description: "You may mark 1 overcharge to leave a bloodhound’s mark on a target you can see and hear. You always know where to go in order to pursue a marked target, though you may not automatically know its exact location. Additionally, you have a sixth sense for things related to your oath, and are able to tell within a couple minutes of study whether a person is involved, supports it, etc."
      },
      {
        name: "Tempered Soul",
        description: "You are fully aware of your surroundings when you sleep, you can survive for up to a month without food or water or rest, and you are immune to any magical effects that would beguile or charm you. If an effect says you can’t transform into your magical form, you can instead do so by taking 1 Stress."
      },
      {
        name: "Oath of Protection",
        description: "If you allow someone to comfort you, and you have a moment of emotional vulnerability in front of them, you may add ensuring their safety to your oath. You always know when they are in danger and can track them down with an hour or two of investigation. Additionally, they gain a magical mark that grants them minor powers based on your magical theme, and can use this mark to communicate with you from anywhere."
      },
      {
        name: "Memory Magic",
        description: `
          You are adept at manipulating the memories of others. When you attempt to alter the memory of a willing, helpless, or non magical entity, roll a test with 3 dice.
          1-3: your memory manipulation fails. The target is aware of your manipulations as a half-remembered dream.
          4-5: you may manipulate the target’s memory, but you may not touch memories that are particularly important, cherished, or traumatic to the target.
          6: you may rewrite major details about the target’s memory. Altering important memories will have drastically negative effects on the target’s mental state.
          Critical: As above, but segments of their memory bleed into yours, and you find yourself remembering things from the target’s life as if they happened to you.
        `
      },
    ],
    abilityTrackNames: ["War Maiden", "Tactician"],
    abilityList: [
      // Level 0. Everyone gets all of these.
      [
        {
          name: "Oathbound’s Fury",
          description: "At the end phase, if you removed at least 2 dice from any enemy dice pools this round, your reserves increase by 1 until the next end phase. (ie. you may roll 1 additional die during the roll phase)"
        },
        {
          name: "Oathbound's Smite",
          description: "During the action phase, you may spend a straight to remove any number of dice from an enemy dice pool, as long as none of those dice share a value."
        },
        {
          name: "Reckless Attack",
          description: "You may spend a guard token to reroll any die in an enemy dice pool. If that die rolls a 1, you may remove it."
        },
      ],
      // Level 1
      [
        {
          name: "Frontrunner",
          description: "Whenever you rally, you may cancel a die from the enemy’s dice pool for each other ally that rallied."
        },
        {
          name: "Formation",
          description: "Whenever you rally, you may choose an ally who also rallied. That ally gains the strengthened status effect."
        },
      ],
      // Level 2
      [
        {
          name: "Overextend",
          description: "You may take 1 harm to remove a single die from an enemy’s dice pool."
        },
        {
          name: "Fight for Friends",
          description: "During the action phase, if every other player has given you a guard token this round, you may spend 4 of a kind to cancel one die from an enemy dice pool for each guard token you have."
        },
      ],
      // Level 3
      [
        {
          name: "Furious Rebuttal",
          description: "At the end of the opposition phase, roll 1d6 for each segment of Stress and Harm you took this round. On a 4-6, cancel any die from an enemy dice pool."
        },
        {
          name: "No Movement Wasted",
          description: "At the end of the action phase, if you spent all the dice in your hand, you may gain 1 guard token."
        },
      ],
      // Level 4
      [
        {
          name: "Tempered Focus",
          description: "As long as you have a negative status effect, gain +1 reroll during the roll phase."
        },
        {
          name: "Power Strike",
          description: "During the action phase, if you have four or more dice with the same value and you spend them as a set, they may cancel dice of any value from the enemy’s dice pool."
        },
      ],
      // Level 5
      [
        {
          name: "Execute",
          description: "You may spend 5 dice with total value 25 or above to cancel all enemy dice with even values, or all enemy dice with odd values. (Your choice)"
        },
        {
          name: "Incursion",
          description: "You and at least two other allies may each spend a set of 2 and any number of guard tokens. Each player may cancel a number of enemy dice equal to the number of guard tokens they spent."
        },
      ],
    ]
  },

  {
    name: "Seeker",
    // Mark 3 experience when you...
    expTriggers: [
      "Experience a major shift in worldview as a result of pursuing your curiosity.",
      "Use cleverness to overcome an enemy that previously defeated you."
    ],
    featureList: [
      {
        name: "Tinker",
        description: `Your downtime projects can create magical artifacts, alchemical concoctions, or impossible contraptions. Describe the properties of your creation, start a 6-segment project clock, and then mark 1, 2, or 3 overcharge depending on the power of the effect. For example:
1 Overcharge = A clockwork bird, a love potion, a nail that magically seals a door.
3 Overcharge = An extra dimensional storage trunk, a magic motorcycle, a lantern that reveals the invisible, a permanent teleportation circle
2 Overcharge = Something in between`
      },
      {
        name: "Mastermind",
        description: `You gain the following:
          Take +1 die on any trait test where you are looking for evidence or investigating, and the GM may tell you something unrelated but important that you discover along the way.
          Once per scene, you may mark 1 overcharge and describe a flashback in which your character made specific preparations for something that has arisen in the narrative. The preparations must be something your character could feasibly have done, though you don’t need to explain how you knew this would happen. You’re just that smart.
          `
      },
      {
        name: "Applied Science",
        description: "Whenever a youma is defeated, you can choose to take a sample of its remains. These samples are unstable, and you may only safely keep one at a time. You can spend a sample to fill an extra project clock segment when you work on a project, or to take +1 die on a magical trait test."
      },
      {
        name: "Divination",
        description: `You may mark 1 overcharge to do one of the following:
Scry - Specify any location you have previously visited, and perceive it as if you were there. If the area is magically protected, your perception is clouded, hazy, and sometimes shows false information.
Augury - Describe an entity, location, or course of action. The GM will give you a sign of weal if the future of the entity aligns with your goals and wellbeing, or a sign of woe if it does not. Alternatively, the GM can decide to give you more specific visions or premonitions about the entity.`
      },
    ],
    abilityTrackNames: ["Logician", "Schemer"],
    abilityList: [
      // Level 0. Everyone gets all of these.
      [
        {
          name: "Pull from the Veil",
          description: "In combat, before your first roll phase, roll one extra die separately. This is your Seeker die. At any point, before finalizing your hand, you may swap your Seeker die for a die in your reserves. The die you swapped out becomes your new seeker die. "
        },
        {
          name: "Silence",
          description: "During the action phase, you may spend a straight to disable any number of enemy abilities until the end of the round."
        },
        {
          name: "Stack the Deck",
          description: "During the action phase, you may spend 2 guard tokens to change the value of one of the dice in your hand to any value."
        },
      ],
      // Level 1
      [
        {
          name: "Jamming Field",
          description: "Gain the following rally action: Choose one ability an enemy has. It loses that ability until the next end step."
        },
        {
          name: "Like Clockwork",
          description: "Whenever you rally, if each of your allies also rallied, you gain the inspired status condition."
        },
      ],
      // Level 2
      [
        {
          name: "Overthink",
          description: "During the roll phase, you may suffer a bane to change one of your dice to any value. You may use this ability once per round"
        },
        {
          name: "Guide Volition",
          description: "In combat, you may spend a set of 3 to increase or reduce the value of up to 3 dice in an enemy dice pool by 1"
        },
      ],
      // Level 3
      [
        {
          name: "Cunning Maneuver",
          description: "At the end of the roll phase, you may flip one of your dice to its opposite side. (This applies to your seeker die as well)"
        },
        {
          name: "Calculated Strike",
          description: "You may spend a set of 3 to remove a die of equal or lesser value from the opposition’s dice pool."
        },
      ],
      // Level 4
      [
        {
          name: "Seeker's Mark",
          description: "Whenever you would cancel a die, if that die has the same value as your seeker die, you may remove it instead."
        },
        {
          name: "Seeker's Gambit",
          description: "Whenever you reroll a die in the enemy’s dice pool, if the die’s new value is equal to your seeker die’s value, you may cancel it."
        },
      ],
      // Level 5
      [
        {
          name: "Tandem Assault",
          description: "At the start of the action phase, if you have exactly the same hand as any of your allies, you may remove three dice from an enemy dice pool."
        },
        {
          name: "Mind Control",
          description: "You may spend five of a kind to take up to 5 dice from an enemy dice pool, roll them, and then spend them as if they were in your hand. Then remove these dice."
        },
      ],
    ]
  },


  {
    name: "Tempest",
    // Mark 3 experience when you...
    expTriggers: [
      "Succeed at a very high-risk and low-reward endeavor",
      "Fix a terrible situation that you ultimately caused"
    ],
    featureList: [
      {
        name: "Tempest Alchemy",
        description: `Describe a magical effect of any sort, then roll a D6 and consult the following:
        1 - A Magical Burst occurs based on the described effect.
        2 - The desired effect occurs, but it is horribly twisted and backfires in some way.
        3 - Roll on the Tempest Surge table.
        4 - Roll on the Tempest Surge table twice and pick either result.
        5 - The desired effect occurs, but with reduced effect or a new complication
        6 - The desired effect occurs.
        `
      },
      {
        name: "Harbinger of the Weird",
        description: "As a downtime action, you may mark 1 Overcharge, and collaborate with the GM to describe an unlikely coincidence that happens to you. eg. Perhaps you meet your archnemesis in line at a coffee shop, or you trip over the entrance to the lair of the evil cult you’ve been pursuing, or you are mistaken for someone very important and find yourself giving orders to a group of shady henchmen."
      },
      {
        name: "Local God",
        description: "You are attuned to the forces of nature around where you live. The weather reflects your mood, people tend to have misfortune befall them when you think ill of them and have lucky breaks when you think positively about them. The clothing that you wear and the way that you speak inadvertently set trends. If these facts are discovered, ordinary people may start banding together to worship you as a cult deity."
      },
      {
        name: "Cataclysm",
        description: "Once per episode, You release any control you had over your magic and allow it to run wild. You rip fissures in the earth, cause earthquakes, and generally tear the environment up. All characters in the vicinity including you suffer 3 banes, you may remove up to 5 dice from each enemy dice pool, and non-magical structures, objects, and people are destroyed."
      },
    ],
    abilityTrackNames: ["Stormchaser", "Catalyst"],
    abilityList: [
      // Level 0. Everyone gets all of these.
      [
        {
          name: "Tempest Surge",
          description: "Whenever you critically succeed on a magical test, or whenever you fail a magical test with 2 or more of the same value in your result set, your magic goes more out of control than normal. Roll on the tempest surge table. The GM can also make you roll on the table if they determine it’s narratively appropriate. If they do, you gain 1 experience."
        },
        {
          name: "Storm's Volatility",
          description: `
            You gain a Volatility die. When you roll your volatility die, roll 1d6 for a random effect. You must roll this die at the beginning of each action phase.
            1 - A player of your choice is attacked. Ignore all enemy abilities for this attack.
            2 - Your choice of enemy rolls two dice into their dice pool.
            3 - A player of your choice gains a status effect. Roll 1d6 to determine the effect. 
            1-2 = Branded, 3-4 = Inspired, 5-6 = Strengthened
            4 - You may reroll up to 3 dice in an enemy’s dice pool.
            5 - Grant 1 guard token to a magical girl or liability.
            6 - Remove a die from an enemy dice pool.
          `
        },
        {
          name: "Distort",
          description: "During the action phase, you may spend a straight to reroll any number of dice in an enemy dice pool. You may repeat this action up to two times."
        },
        {
          name: "Invoke Unpredictability",
          description: "During the action phase, you may spend a guard token to roll your Volatility die."
        },
      ],
      // Level 1
      [
        {
          name: "Stormchase",
          description: "When you rally, an ally of your choice who also rallied may reroll up to 3 dice in an enemy dice pool. For each 6 rolled this way, you or the ally may gain 1 guard token."
        },
        {
          name: "Volatile Rally",
          description: "When you rally, roll your volatility die once for each other ally that rallied."
        },
      ],
      // Level 2
      [
        {
          name: "Nullifying Front",
          description: "You may spend any 3 dice whose values sum to 10 to remove any 3 enemy dice whose values also sum to 10."
        },
        {
          name: "Unstable Vector",
          description: "You may spend a bust to roll 3 dice. If you roll doubles, you may remove two dice from the enemy dice pool. If you roll triples, you may remove five dice from the enemy dice pool. Otherwise, gain 1 guard token."
        },
      ],
      // Level 3
      [
        {
          name: "Ionic Accumulation",
          description: "At the start of the action phase, if all values in your hand are even, you may remove an even-valued die from the enemy’s dice pool. If all values are odd, you may remove an odd-valued die."
        },
        {
          name: "Aftershocks",
          description: "At the end of the action phase, if you rolled your Volatility die 3 or more times this round, you may cancel up to 2 dice from an enemy dice pool."
        },
      ],
      // Level 4
      [
        {
          name: "Storm Battery",
          description: "When you experience fallout during combat, you may remove a die from each enemy dice pool."
        },
        {
          name: "State Disruption",
          description: "If you would gain a positive status effect, you may instead suffer a bane and remove up to 2 dice from an enemy dice pool."
        },
      ],
      // Level 5
      [
        {
          name: "Storm Body",
          description: `At the start of the action phase, you may choose to activate Storm Body until the next end step.
Whenever you suffer a bane, you may remove a die from an enemy dice pool.
You must discard all guard tokens and may not gain guard tokens.
You suffer a bane at the end of the action phase.
`
        },
        {
          name: "Additive Interference",
          description: "Whenever you roll your storm’s volatility die, if the value rolled is equal to your current number of marked overcharge segments, you may cancel or re-roll a die in the enemy dice pool."
        },
      ],
    ]
  },

  // /*Template:*/
  // {
  //   name: "",
  //   // Mark 3 experience when you...
  //   expTriggers: [
  //     "",
  //     ""
  //   ],
  //   featureList: [
  //     {
  //       name: "",
  //       description: ""
  //     },
  //     {
  //       name: "",
  //       description: ""
  //     },
  //     {
  //       name: "",
  //       description: ""
  //     },
  //     {
  //       name: "",
  //       description: ""
  //     },
  //   ],
  //   abilityTrackNames: ["", ""],
  //   abilityList: [
  //     // Level 0. Everyone gets all of these.
  //     [
  //       {
  //         name: "",
  //         description: ""
  //       },
  //     ],
  //     // Level 1
  //     [
  //       {
  //         name: "",
  //         description: ""
  //       },
  //       {
  //         name: "",
  //         description: ""
  //       },
  //     ],
  //     // Level 2
  //     [
  //       {
  //         name: "",
  //         description: ""
  //       },
  //       {
  //         name: "",
  //         description: ""
  //       },
  //     ],
  //     // Level 3
  //     [
  //       {
  //         name: "",
  //         description: ""
  //       },
  //       {
  //         name: "",
  //         description: ""
  //       },
  //     ],
  //     // Level 4
  //     [
  //       {
  //         name: "",
  //         description: ""
  //       },
  //       {
  //         name: "",
  //         description: ""
  //       },
  //     ],
  //     // Level 5
  //     [
  //       {
  //         name: "",
  //         description: ""
  //       },
  //       {
  //         name: "",
  //         description: ""
  //       },
  //     ],
  //   ]
  // },
] as Archetype[]
