import { heroes } from '@/data/heroes'

export const findHero = (id: number) => heroes.find((hero) => hero.id === id)
