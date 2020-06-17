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
        description: "As a downtime action, you may designate a person or object to be your Ward. They remain your ward until harm befalls them or you designate a new ward. If the GM puts your ward in danger, they must tell you, and you can decide to start a scene in which you show up at the last possible moment to try to save or protect them."
      },
      {
        name: "Petrifying Seal",
        description: "You may spend a minute and mark 1 overcharge to turn any non magical being into a stone statue. The being must be willing or helpless. While in this state, they cannot be detected or harmed by magic. They are unconscious, but they can still dream. They remain in this state for 1 year or until you end the effect by marking 1 overcharge and touching them."
      },
      {
        name: "Knight’s Reward",
        description: "Whenever an ally activates an experience trigger for their archetype or experiences hope fallout, you may mark 2 hope."
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
          description: "During the action phase, you may spend a straight to reduce an enemy’s power to zero until the end of the round."
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
          description: "Whenever you rally, all magical girls that rallied may freely spend dice from the hands of other magical girls that also rallied as though they were in their own hands."
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
