import fs from 'fs-extra';
import { Spell } from './types';

const PATH = '.src/database/db.json';
const API_BASE_URL = new URL('https://hp-api.onrender.com/api/spells');

async function fetchData(url: URL): Promise<Spell[]> {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Data is not loading');
        }
        const data = await response.json();
        const responseData: Spell[] = data.map((spells: Spell) => { 
            return {
                id: spells.id,
                name: spells.name,
                description: spells.description
            };
        });
            return responseData;
    } 
    catch (error: any) {
        console.log(error.message);
        throw error; 
    };
};


abstract class BookModel { 

	static async getId(id: string): Promise<Spell | undefined> {
		API_BASE_URL.searchParams.append('api/spells', id);
		const result = await fetchData(API_BASE_URL);
		return result.find(spell => spell.id === id);;
    };

    static async getName(name: string): Promise<Spell | undefined> {
        API_BASE_URL.searchParams.append('api/spells', name);
        const result = await fetchData(API_BASE_URL);
        return result.find(spell => spell.name === name);;
    };
}

async function addSpell(dataObj: any) {
    try {
        const spells = await fetchData(API_BASE_URL);
        const spell = spells.find((s) => s.name.toLowerCase() === dataObj.toLowerCase());
    
        if (!spell) {
          console.log(`The spell "${dataObj}" was not found in the API.`);
          return;
        }
    
        let db = [];
        if (fs.existsSync(PATH)) {
          const rawData = fs.readFileSync(PATH, 'utf8');
          db = JSON.parse(rawData);
        }

        const existingSpell = db.find((spell: Spell) => spell.name.toLowerCase() === dataObj.toLowerCase());
    
        if (existingSpell) {
            console.log(`The spell "${dataObj}" already exists in the database.`);
        } else {
            db.push(spell);
            fs.writeFileSync(PATH, JSON.stringify(db, null, 2));
            console.log(`The spell "${dataObj}" has been added to the database.`);
        }
      } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('Unknown error');
        }
    }

    const spellName = process.argv[2];

if (!spellName) {
  console.log('Please provide the name of a spell.');
} else {
  addSpell(spellName);
}
};

async function removeSpell(dataObj: string) {
    try {
        const database = await fs.readJson(PATH);
        const spellIndex = database.findIndex((spell: any) => spell.name === dataObj);
            if (spellIndex !== -1) {
                database.splice(spellIndex, 1);
            await fs.writeJson(PATH, database, { spaces: 2 });
                console.log(`The spell "${dataObj}" has been removed from the database.`);
            } else {
                console.log(`No a spell with the name was found "${dataObj}".`);
      }
    } catch (error) {
        if (typeof error === 'string') {
            console.error(error);
        } else if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('Unknown error');
        }
    }
};

export {  
    fetchData,
    BookModel,
    addSpell,
    removeSpell    
};