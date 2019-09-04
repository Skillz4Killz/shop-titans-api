module.exports = [
  {
    class: "Fighter",
    subclass: "Soldier",
		prerequisite: "---",
		stats: [
			{ name: 'attack', amount: 10 },
			{ name: 'health', amount: 30 },
			{ name: 'defense', amount: 15 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 0,
			gems: 0
		},
		threatRating: 90,
		equipments: [
			{ slot: 1, allowed: ["Sword", "Mace", "Dagger"] },
			{ slot: 2, allowed: ["Heavy Armor"] },
			{ slot: 3, allowed: ["Gauntlets"] },
			{ slot: 4, allowed: ["Heavy Footwear"] },
			{ slot: 5, allowed: ["Potion"] },
			{ slot: 6, allowed: ["Shield"] },
		],
		element: "Earth",
		skillUnlockLevels: [4, 10]
	},
	{
    class: "Fighter",
    subclass: "Barbarian",
		prerequisite: "Merchant Lv. 10",
		stats: [
			{ name: 'attack', amount: 12 },
			{ name: 'health', amount: 35 },
			{ name: 'defense', amount: 10 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 10000,
			gems: 100
		},
		threatRating: 120,
		equipments: [
			{ slot: 1, allowed: ["Sword", "Axe", "Spear", "Mace"] },
			{ slot: 2, allowed: ["Helmet"] },
			{ slot: 3, allowed: ["Gauntlets"] },
			{ slot: 4, allowed: ["Heavy Footwear"] },
			{ slot: 5, allowed: ["Potion"] },
			{ slot: 6, allowed: ["Herbal Medicine"] },
		],
		element: "Fire",
		skillUnlockLevels: [5, 12]
	},
	{
    class: "Fighter",
    subclass: "Knight",
		prerequisite: "Merchant Lv. 20",
		stats: [
			{ name: 'attack', amount: 10 },
			{ name: 'health', amount: 42 },
			{ name: 'defense', amount: 25 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 50000,
			gems: 250
		},
		threatRating: 90,
		equipments: [
			{ slot: 1, allowed: ["Spear", "Axe"] },
			{ slot: 2, allowed: ["Heavy Armor"] },
			{ slot: 3, allowed: ["Gauntlets"] },
			{ slot: 4, allowed: ["Helmet"] },
			{ slot: 5, allowed: ["Heavy Footwear"] },
			{ slot: 6, allowed: ["Shield"] },
		],
		element: "Fire",
		skillUnlockLevels: [5, 12, 23]
	},
	{
    class: "Fighter",
    subclass: "Ranger",
		prerequisite: "Merchant Lv. 20",
		stats: [
			{ name: 'attack', amount: 15 },
			{ name: 'health', amount: 33 },
			{ name: 'defense', amount: 20 },
			{ name: 'evasion', amount: "20%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 250000,
			gems: 500
		},
		threatRating: 90,
		equipments: [
			{ slot: 1, allowed: ["Bow", "Crossbow", "Gun"] },
			{ slot: 2, allowed: ["Heavy Armor"] },
			{ slot: 3, allowed: ["Gauntlets"] },
			{ slot: 4, allowed: ["Helmet"] },
			{ slot: 5, allowed: ["Potion"] },
			{ slot: 6, allowed: ["Ring"] },
		],
		element: "Air",
		skillUnlockLevels: [5, 10, 23]
	},
	{
    class: "Fighter",
    subclass: "Samurai",
		prerequisite: "Merchant Lv. 45",
		stats: [
			{ name: 'attack', amount: 20 },
			{ name: 'health', amount: 40 },
			{ name: 'defense', amount: 25 },
			{ name: 'evasion', amount: "10%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 2500000,
			gems: 1000
		},
		threatRating: 90,
		equipments: [
			{ slot: 1, allowed: ["Sword", "Bow", "Spear"] },
			{ slot: 2, allowed: ["Heavy Armor"] },
			{ slot: 3, allowed: ["Gauntlets"] },
			{ slot: 4, allowed: ["Helmet"] },
			{ slot: 5, allowed: ["Heavy Footwear"] },
			{ slot: 6, allowed: ["Potion"] },
		],
		element: "Water",
		skillUnlockLevels: [5, 10, 23, 35]
	},
	{
    class: "Rogue",
    subclass: "Thief",
		prerequisite: "---",
		stats: [
			{ name: 'attack', amount: 10 },
			{ name: 'health', amount: 22 },
			{ name: 'defense', amount: 10 },
			{ name: 'evasion', amount: "30%" },
		],
		criticalHit: {
			chance: "20%",
			damage: "2x",
		},
		cost: {
			gold: 0,
			gems: 0
		},
		threatRating: 40,
		equipments: [
			{ slot: 1, allowed: ["Dagger", "Bow", "Crossbow"] },
			{ slot: 2, allowed: ["Light Armor"] },
			{ slot: 3, allowed: ["Rogue Hat"] },
			{ slot: 4, allowed: ["Gloves"] },
			{ slot: 5, allowed: ["Amulet"] },
			{ slot: 6, allowed: ["Ring"] },
		],
		element: "Air",
		skillUnlockLevels: [5, 12]
	},
	{
    class: "Rogue",
    subclass: "Monk",
		prerequisite: "Merchant Lv. 15",
		stats: [
			{ name: 'attack', amount: 10 },
			{ name: 'health', amount: 23 },
			{ name: 'defense', amount: 10 },
			{ name: 'evasion', amount: "30%" },
		],
		criticalHit: {
			chance: "20%",
			damage: "3x",
		},
		cost: {
			gold: 10000,
			gems: 100
		},
		threatRating: 40,
		equipments: [
			{ slot: 1, allowed: ["Clothes"] },
			{ slot: 2, allowed: ["Amulet"] },
			{ slot: 3, allowed: ["Amulet"] },
			{ slot: 4, allowed: ["Amulet"] },
			{ slot: 5, allowed: ["Ring"] },
			{ slot: 6, allowed: ["Ring"] },
		],
		element: "Water",
		skillUnlockLevels: [5, 12]
	},
	{
    class: "Rogue",
    subclass: "Musketeer",
		prerequisite: "Merchant Lv. 25",
		stats: [
			{ name: 'attack', amount: 15 },
			{ name: 'health', amount: 23 },
			{ name: 'defense', amount: 12 },
			{ name: 'evasion', amount: "30%" },
		],
		criticalHit: {
			chance: "30%",
			damage: "2x",
		},
		cost: {
			gold: 50000,
			gems: 250
		},
		threatRating: 40,
		equipments: [
			{ slot: 1, allowed: ["Crossbow", "Sword", "Gun"] },
			{ slot: 2, allowed: ["Light Armor"] },
			{ slot: 3, allowed: ["Gloves"] },
			{ slot: 4, allowed: ["Heavy Footwear"] },
			{ slot: 5, allowed: ["Potion"] },
			{ slot: 6, allowed: ["Amulet"] },
		],
		element: "Fire",
		skillUnlockLevels: [5, 12, 23]
	},
	{
    class: "Rogue",
    subclass: "Wanderer",
		prerequisite: "Merchant Lv. 35",
		stats: [
			{ name: 'attack', amount: 15 },
			{ name: 'health', amount: 25 },
			{ name: 'defense', amount: 12 },
			{ name: 'evasion', amount: "40%" },
		],
		criticalHit: {
			chance: "20%",
			damage: "2x",
		},
		cost: {
			gold: 250000,
			gems: 500
		},
		threatRating: 40,
		equipments: [
			{ slot: 1, allowed: ["Dagger", "Axe", "Gun"] },
			{ slot: 2, allowed: ["Light Armor"] },
			{ slot: 3, allowed: ["Hat"] },
			{ slot: 4, allowed: ["Light Footwear"] },
			{ slot: 5, allowed: ["Herbal Medicine"] },
			{ slot: 6, allowed: ["Amulet"] },
		],
		element: "Earth",
		skillUnlockLevels: [5, 12, 23]
	},
	{
    class: "Rogue",
    subclass: "Ninja",
		prerequisite: "Merchant Lv. 50",
		stats: [
			{ name: 'attack', amount: 20 },
			{ name: 'health', amount: 30 },
			{ name: 'defense', amount: 15 },
			{ name: 'evasion', amount: "30-50%" },
		],
		criticalHit: {
			chance: "20%(+20%)",
			damage: "3x",
		},
		cost: {
			gold: 2500000,
			gems: 1000
		},
		threatRating: 40,
		equipments: [
			{ slot: 1, allowed: ["Dagger", "Sword", "Bow"] },
			{ slot: 2, allowed: ["Light Armor"] },
			{ slot: 3, allowed: ["Rogue Hat"] },
			{ slot: 4, allowed: ["Gloves"] },
			{ slot: 5, allowed: ["Light Footwear"] },
			{ slot: 6, allowed: ["Ring"] },
		],
		element: "Dark",
		skillUnlockLevels: [5, 12, 23, 35]
	},
	{
    class: "Spellcaster",
    subclass: "Mage",
		prerequisite: "---",
		stats: [
			{ name: 'attack', amount: 24 },
			{ name: 'health', amount: 20 },
			{ name: 'defense', amount: 10 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 0,
			gems: 0
		},
		threatRating: 10,
		equipments: [
			{ slot: 1, allowed: ["Staff", "Crossbow", "Wand"] },
			{ slot: 2, allowed: ["Clothes"] },
			{ slot: 3, allowed: ["Magician Hat"] },
			{ slot: 4, allowed: ["Light Footwear"] },
			{ slot: 5, allowed: ["Spell"] },
			{ slot: 6, allowed: ["Ring"] },
		],
		element: "Fire",
		skillUnlockLevels: [5, 12]
	},
	{
    class: "Spellcaster",
    subclass: "Cleric",
		prerequisite: "Merchant Lv. 12",
		stats: [
			{ name: 'attack', amount: 25 },
			{ name: 'health', amount: 20 },
			{ name: 'defense', amount: 10 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 10000,
			gems: 100
		},
		threatRating: 10,
		equipments: [
			{ slot: 1, allowed: ["Mace", "Spear", "Wand"] },
			{ slot: 2, allowed: ["Clothes"] },
			{ slot: 3, allowed: ["Magician Hat"] },
			{ slot: 4, allowed: ["Light Footwear"] },
			{ slot: 5, allowed: ["Spell"] },
			{ slot: 6, allowed: ["Shield"] },
		],
		element: "Light",
		skillUnlockLevels: [5, 12]
	},
	{
    class: "Spellcaster",
    subclass: "Druid",
		prerequisite: "Merchant Lv. 22",
		stats: [
			{ name: 'attack', amount: 30 },
			{ name: 'health', amount: 20 },
			{ name: 'defense', amount: 12 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 50000,
			gems: 250
		},
		threatRating: 10,
		equipments: [
			{ slot: 1, allowed: ["Staff", "Bow", "Wand"] },
			{ slot: 2, allowed: ["Clothes"] },
			{ slot: 3, allowed: ["Herbal Medicine"] },
			{ slot: 4, allowed: ["Herbal Medicine"] },
			{ slot: 5, allowed: ["Amulet"] },
			{ slot: 6, allowed: ["Spell"] },
		],
		element: "Earth",
		skillUnlockLevels: [5, 12, 23]
	},
	{
    class: "Spellcaster",
    subclass: "Sorcerer",
		prerequisite: "Merchant Lv. 32",
		stats: [
			{ name: 'attack', amount: 35 },
			{ name: 'health', amount: 20 },
			{ name: 'defense', amount: 12 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 250000,
			gems: 500
		},
		threatRating: 10,
		equipments: [
			{ slot: 1, allowed: ["Staff", "Dagger", "Wand"] },
			{ slot: 2, allowed: ["Clothes"] },
			{ slot: 3, allowed: ["Gloves"] },
			{ slot: 4, allowed: ["Light Footwear"] },
			{ slot: 5, allowed: ["Spell"] },
			{ slot: 6, allowed: ["Spell"] },
		],
		element: "Dark",
		skillUnlockLevels: [5, 12, 23]
	},
	{
    class: "Spellcaster",
    subclass: "Spellblade",
		prerequisite: "Merchant Lv. 48",
		stats: [
			{ name: 'attack', amount: 40 },
			{ name: 'health', amount: 23 },
			{ name: 'defense', amount: 15 },
			{ name: 'evasion', amount: "0%" },
		],
		criticalHit: {
			chance: "5%",
			damage: "2x",
		},
		cost: {
			gold: 2500000,
			gems: 1000
		},
		threatRating: 10,
		equipments: [
			{ slot: 1, allowed: ["Sword", "Axe", "Staff", "Bow"] },
			{ slot: 2, allowed: ["Heavy Armor", "Light Armor", "Clothes"] },
			{ slot: 3, allowed: ["Magician Hat", "Helmet", "Gauntlets", "Gloves"] },
			{ slot: 4, allowed: ["Light Footwear", "Heavy Footwear"] },
			{ slot: 5, allowed: ["Amulet", "Ring", "Potion", "Spell"] },
			{ slot: 6, allowed: ["Amulet", "Ring", "Herbal Medicine", "Spell"] },
		],
		element: "Any",
		skillUnlockLevels: [5, 12, 23, 35]
	},
]
