interface Spell {
	id: string,
	name: string,
	description: string
}

interface SpellsData {
	spells: Spell[];
}

export { Spell, SpellsData };