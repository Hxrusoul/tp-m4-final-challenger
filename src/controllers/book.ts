import { Spell, SpellsData } from '../models/types';
import { BookModel } from '../models/book';

abstract class BookCtrl {

	static async getId(id: string): Promise<Spell | undefined> {
		const spell = await BookModel.getId(id);
		return spell;
	};

	static async getName(name: string): Promise<Spell | undefined> {
		const spell = await BookModel.getName(name);
		return spell;
	};

	static async addSpell(dataObj: any): Promise<SpellsData> {
		const spell = await BookCtrl.addSpell(dataObj);
		return spell;
	};

	static async removeSpell(dataObj: any): Promise<SpellsData> {
        const spell = await BookCtrl.removeSpell(dataObj);
        return spell;
    };

	static async fetchData(): Promise<Spell[]> {
        const result = await BookCtrl.fetchData();
        return result;
    };
};

export { BookCtrl };