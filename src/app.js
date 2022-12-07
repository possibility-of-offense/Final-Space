import { getCharacters } from './api/dataService.js';

// console.log("script file is loaded")

// *** request test ***
// check the browser's console
(async () => console.log(await getCharacters()))();

// test

// new branch