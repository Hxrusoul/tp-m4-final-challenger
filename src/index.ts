import { BookCtrl } from "./controllers/book";
import minimist from 'minimist';

function requestData(params: any) {
  if (!params) {
    throw new Error('Please provide valid parameters.');
  }

  const { id, name, description, spell, add, remove } = params;

  if (id) return BookCtrl.getId(id);
  if (name) return BookCtrl.getName(name);
  if (add && id)

  if (spell) {
    if (add && id)
      return BookCtrl.addSpell({ id, name, description });
    if (add && name)
      return BookCtrl.addSpell({ id, name, description });
    if (remove && id)
      return BookCtrl.removeSpell(id);
    if (remove && name)
      return BookCtrl.removeSpell(name);
  }
  throw new Error('Please provide valid parameters.');
}

function processParams(params: string[]) {
  const options = minimist(params);

  const { id, name, spell, description, add, remove } = options;

  if (!id && !name && !spell) {
    console.log('Please provide valid parameters.');
    process.exit(1);
  }

  if (spell) {
    if (add && !id && !name) {
      console.log('You need to provide either an id or a name for the spell.');
      process.exit(1);
    }

    if (!add && !remove) {
      console.log('Please specify whether you want to add or remove a spell.');
      process.exit(1);
    }

    if (add && (id || name) && !description) {
      console.log('Please provide a description when adding a spell.');
      process.exit(1);
    }

    if (remove && (id || name) && description) {
      console.log('You should not provide a description when removing a spell.');
      process.exit(1);
    }
  }

  return {
    id,
    name,
    description,
    spell: spell || false,
    add: add || false,
    remove: remove || false,
  };
}

async function main() {
  try {
    const params = process.argv.slice(2);
    const processedParams = processParams(params);
    const response: any = await requestData(processedParams);

    console.log(response);
  } catch (error: any) { 
    console.error('Error:', error.message);
  }
}

main();