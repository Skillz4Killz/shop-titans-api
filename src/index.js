const { GraphQLServer } = require('graphql-yoga');
const workers = require('./constants/workers');
const blueprints = require('./constants/blueprints');
const champions = require('./constants/champions');
const heroes = require('./constants/heroes');

const resolvers = {
  Query: {
    info: () => `This is the Shop Titans API.`,
    blueprints: () => Object.values(blueprints),
    champions: () => Object.values(champions),
    heroes: () => Object.values(heroes),
    workers: () => Object.values(workers),
  },
  Worker: {
    name: (parent) => parent.name,
    level_required: (parent) => parent.level_required,
    gold_cost: (parent) => parent.gold_cost,
    gem_cost: (parent) => parent.gem_cost,
    title: (parent) => parent.title,
    blueprint_unlocks: (parent) => parent.blueprint_unlocks,
    levels: (parent) => parent.levels,
  },
  Hero: {
    class: (parent) => parent.class,
    subclass: (parent) => parent.subclass,
    prerequisite: (parent) => parent.prerequisite,
    stats: (parent) => parent.stats,
    criticalHit: (parent) => parent.criticalHit,
    cost: (parent) => parent.cost,
    threatRating: (parent) => parent.threatRating,
    equipments: (parent) => parent.equipments,
    element: (parent) => parent.element,
    skillUnlockLevels: (parent) => parent.skillUnlockLevels,
  },
  Blueprint: {
    name: (parent) => parent.name,
    type: (parent) => parent.type,
    unlockPrerequisite: (parent) => parent.unlockPrerequisite,
    researchScrolls: (parent) => parent.researchScrolls,
    tier: (parent) => parent.tier,
    value: (parent) => parent.value,
    crafting: (parent) => parent.crafting,
    // netValue: (parent) => parent.# netValue,
    merchantXP: (parent) => parent.merchantXP,
    workerXP: (parent) => parent.workerXP,
    workers: (parent) => parent.workers,
    iron: (parent) => parent.iron,
    wood: (parent) => parent.wood,
    leather: (parent) => parent.leather,
    herbs: (parent) => parent.herbs,
    steel: (parent) => parent.steel,
    ironwood: (parent) => parent.ironwood,
    fabric: (parent) => parent.fabric,
    oil: (parent) => parent.oil,
    components: (parent) => parent.components,
    attack: (parent) => parent.attack,
    defense: (parent) => parent.defense,
    hp: (parent) => parent.hp,
    crafting: (parent) => parent.crafting,
    ascension: (parent) => parent.ascension,
    energy: (parent) => parent.energy,
  },
  Champion: {
    name: (parent) => parent.name,
    title: (parent) => parent.title,
    prerequisite: (parent) => parent.prerequisite,
    stats: (parent) => parent.stats,
    skill: (parent) => parent.skill,
    criticalHit: (parent) => parent.criticalHit,
    unlockCost: (parent) => parent.unlockCost,
    threatRating: (parent) => parent.threatRating,
    ranks: (parent) => parent.ranks,
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
