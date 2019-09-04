module.exports = [
  {
    name: "Argon",
    title: "Aspiring Knight",
    prerequisite: "Merchant Lv.1",
    stats: [
      { name: "attack", amount: 50 },
      { name: "health", amount: 30 },
      { name: "defense", amount: 30 },
      { name: "evasion", amount: "0%" },
    ],
    skill: {
      name: "Aura of Courage",
      effect: "10% bonus Attack and Defense for the party.",
    },
    criticalHit: {
      chance: "5%",
      damage: "2x",
    },
    unlockCost: {
      coins: 0,
    },
    threatRating: 90,
    ranks: [
      {
        rank: 1,
        coins: 5,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of Courage",
            effect: "10% bonus Attack and Defense for the party.",
          },
        },
        title: "The King's Shadow",
        story: [
          {
            name: "Argon",
            text:
              "...And that's when I slashed the Troublin with my sword! Pow!",
          },
          {
            name: "Elder Owen",
            text:
              "Ho ho! Quite the tale, Argon! Ah the fire of youth... I must say, it's very nice of you to accompany this old man on his morning walk.",
          },
          {
            name: "Argon",
            text:
              "Don't mention it! If I am to become a knight someday, I must help people in need!",
          },
          {
            name: "Elder Owen",
            text:
              "Just like your father, eh? I'm sure you'll make a fine knight, my boy. Why, perhaps you could even work as the King's royal guard. Speak of the devil, there he is at the market! Why not go ask him?",
          },
          {
            name: "Argon",
            text:
              "YOUR MAJESTY! I've come to offer you my services as a knight!",
          },
          {
            name: "Reinhold",
            text:
              "W-what's the meaning of this!? Sia, please handle this commoner!",
          },
          {
            name: "Sia",
            text: "Of course, my King. Well, young man? What is it?",
          },
          {
            name: "Argon",
            text:
              "Wow! I, uh... I'm knight! I want to become an Argon! No, wait a minute...",
          },
          {
            name: "Sia",
            text:
              "You certainly have guts! If you're so determined, come see me in the castle's courtyard next week. Train hard until then! I would not tolerate a slacker among the King's knights...",
          },
        ],
      },
      {
        rank: 2,
        coins: 15,
        reward: { health: 6, attack: 25, defense: 40, skill: "---" },
      },
      {
        rank: 3,
        coins: 25,
        reward: { health: 19, attack: 75, defense: 121, skill: "---" },
      },
      {
        rank: 4,
        coins: 50,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of Resolve",
            effect: "20% bonus Attack and Defense for the party.",
          },
        },
      },
      {
        rank: 5,
        coins: 75,
        reward: { health: 25, attack: 100, defense: 162, skill: "---" },
      },
      {
        rank: 6,
        coins: 75,
        reward: { health: 32, attack: 125, defense: 202, skill: "---" },
      },
      {
        rank: 7,
        coins: 100,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of Heroism",
            effect: "30% bonus Attack and Defense for the party.",
          },
        },
      },
      {
        rank: 8,
        coins: 100,
        reward: { health: 38, attack: 150, defense: 243, skill: "---" },
      },
      {
        rank: 9,
        coins: 150,
        reward: { health: 57, attack: 225, defense: 364, skill: "---" },
      },
      {
        rank: 10,
        coins: 200,
        reward: { health: 77, attack: 300, defense: 486, skill: "---" },
      },
      {
        rank: 11,
        coins: "---",
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Aura of the Paladin",
            effect: "40% bonus Attack and Defense for the party.",
          },
        },
      },
    ],
  },
  {
    name: "Lilu",
    title: "Apprentice",
    prerequisite: "Merchant Lv.7",
    stats: [
      { name: "attack", amount: 150 },
      { name: "health", amount: 20 },
      { name: "defense", amount: 20 },
      { name: "evasion", amount: "0%" },
    ],
    skill: {
      name: "Cure Wounds",
      effect: "Heals party by 3 HP each turn. 10% faster resting time.",
    },
    criticalHit: {
      chance: "5%",
      damage: "2x",
    },
    unlockCost: {
      coins: 25,
    },
    threatRating: 10,
    ranks: [
      {
        rank: 1,
        coins: 5,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Cure Wounds",
            effect: "Heals party by 3 HP each turn. 10% faster resting time.",
          },
        },
      },
      {
        rank: 2,
        coins: 15,
        reward: { health: 2, attack: 74, defense: 19, skill: "---" },
      },
      {
        rank: 3,
        coins: 25,
        reward: { health: 6, attack: 223, defense: 58, skill: "---" },
      },
      {
        rank: 4,
        coins: 50,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Divine Power",
            effect: "Heals party by 5 HP each turn. 20% faster resting time.",
          },
        },
      },
      {
        rank: 5,
        coins: 75,
        reward: { health: 8, attack: 298, defense: 78, skill: "---" },
      },
      {
        rank: 6,
        coins: 75,
        reward: { health: 10, attack: 372, defense: 97, skill: "---" },
      },
      {
        rank: 7,
        coins: 100,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Revitalization",
            effect: "Heals party by 7 HP each turn. 35% faster resting time.",
          },
        },
      },
      {
        rank: 8,
        coins: 100,
        reward: { health: 12, attack: 447, defense: 117, skill: "---" },
      },
      {
        rank: 9,
        coins: 150,
        reward: { health: 19, attack: 670, defense: 176, skill: "---" },
      },
      {
        rank: 10,
        coins: 200,
        reward: { health: 25, attack: 894, defense: 234, skill: "---" },
      },
      {
        rank: 11,
        coins: "---",
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Sacred Circle",
            effect: "Heals party by 10 HP each turn. 50% faster resting time.",
          },
        },
      },
    ],
  },
  {
    name: "Sia",
    title: "King's Shadow",
    prerequisite: "Merchant Lv.10",
    stats: [
      { name: "attack", amount: 100 },
      { name: "health", amount: 25 },
      { name: "defense", amount: 30 },
      { name: "evasion", amount: 30 },
    ],
    skill: {
      name: "Eye for Loot",
      effect: "25% more components found. Slightly more valuable loot found.",
    },
    criticalHit: {
      chance: "20%",
      damage: "2x",
    },
    unlockCost: {
      coins: 50,
    },
    threatRating: 40,
    ranks: [
      {
        rank: 1,
        coins: 10,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Eye for Loot",
            effect:
              "25% more components found. Slightly more valuable loot found.",
          },
        },
      },
      {
        rank: 2,
        coins: 20,
        reward: { health: 2, attack: 42, defense: 30, skill: "---" },
      },
      {
        rank: 3,
        coins: 30,
        reward: { health: 7, attack: 128, defense: 90, skill: "---" },
      },
      {
        rank: 4,
        coins: 60,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Trained Eye",
            effect: "50% more components found. More valuable loot found.",
          },
        },
      },
      {
        rank: 5,
        coins: 90,
        reward: { health: 9, attack: 171, defense: 121, skill: "---" },
      },
      {
        rank: 6,
        coins: 90,
        reward: { health: 11, attack: 214, defense: 151, skill: "---" },
      },
      {
        rank: 7,
        coins: 125,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Eye for Style",
            effect:
              "75% more components found in quests. Loot found is much more valuable.",
          },
        },
      },
      {
        rank: 8,
        coins: 125,
        reward: { health: 14, attack: 257, defense: 181, skill: "---" },
      },
      {
        rank: 9,
        coins: 200,
        reward: { health: 21, attack: 386, defense: 272, skill: "---" },
      },
      {
        rank: 10,
        coins: 250,
        reward: { health: 28, attack: 515, defense: 363, skill: "---" },
      },
      {
        rank: 11,
        coins: "---",
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Eye of the Beholder",
            effect:
              "100% more components found in quests. Loot found is way more valuable!",
          },
        },
      },
    ],
  },
  {
    name: "Yami",
    title: "Kunoichi",
    prerequisite: "Merchant Lv.15",
    stats: [
      { name: "attack", amount: 100 },
      { name: "health", amount: 25 },
      { name: "defense", amount: 30 },
      { name: "evasion", amount: 30 },
    ],
    skill: {
      name: "Ambush",
      effect:
        "10% faster quest time. +5% Critical Chance and Evasion for the party.",
    },
    criticalHit: {
      chance: "20%",
      damage: "3x",
    },
    unlockCost: {
      coins: 50,
    },
    threatRating: 40,
    ranks: [
      {
        rank: 1,
        coins: 10,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Ambush",
            effect:
              "10% faster quest time. +5% Critical Chance and Evasion for the party.",
          },
        },
      },
      {
        rank: 2,
        coins: 20,
        reward: { health: 2, attack: 45, defense: 20, skill: "---" },
      },
      {
        rank: 3,
        coins: 30,
        reward: { health: 7, attack: 136, defense: 62, skill: "---" },
      },
      {
        rank: 4,
        coins: 60,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Coordinated Ambush",
            effect:
              "20% faster quest time. +10% Critical Chance and Evasion for the party.",
          },
        },
      },
      {
        rank: 5,
        coins: 90,
        reward: { health: 10, attack: 182, defense: 82, skill: "---" },
      },
      {
        rank: 6,
        coins: 90,
        reward: { health: 12, attack: 228, defense: 103, skill: "---" },
      },
      {
        rank: 7,
        coins: 125,
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Ethereal Ambush",
            effect:
              "35% faster quest time. +15% Critical Chance and Evasion for the party.",
          },
        },
      },
      {
        rank: 8,
        coins: 125,
        reward: { health: 15, attack: 273, defense: 124, skill: "---" },
      },
      {
        rank: 9,
        coins: 200,
        reward: { health: 22, attack: 410, defense: 186, skill: "---" },
      },
      {
        rank: 10,
        coins: 250,
        reward: { health: 30, attack: 547, defense: 248, skill: "---" },
      },
      {
        rank: 11,
        coins: "---",
        reward: {
          health: 0,
          attack: 0,
          defense: 0,
          skill: {
            name: "Perfect Ambush",
            effect:
              "50% faster quest time. +20% Critical Chance and Evasion for the party.",
          },
        },
      },
    ],
  },
]
