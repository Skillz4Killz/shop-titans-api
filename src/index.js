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
