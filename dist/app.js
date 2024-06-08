"use strict";
var _a;
const heroes = [
    { id: 1, name: 'Batman', realName: 'Bruce Wayne' },
    { id: 2, name: 'Superman', realName: 'Clark Kent' },
    { id: 3, name: 'Wonder Woman', realName: 'Diana Prince' }
];
const findHero = (id) => heroes.find(hero => hero.id === id);
const hero = findHero(3);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Hero not found');
