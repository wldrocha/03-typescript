const heroes = [
  { id: 1, name: 'Batman', realName: 'Bruce Wayne' },
  { id: 2, name: 'Superman', realName: 'Clark Kent' },
  { id: 3, name: 'Wonder Woman', realName: 'Diana Prince' }
]

const findHero = (id: number) => heroes.find(hero => hero.id === id)

const hero = findHero(3)

console.log(hero?.name ?? 'Hero not found')