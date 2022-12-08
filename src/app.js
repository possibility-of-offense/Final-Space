import { getCharacters } from "./api/dataService.js";
import { accordion } from "./dom/accordion.js";

accordion();

// console.log("script file is loaded")

// *** request test ***
// check the browser's console
// Some IFFE functions
(async () => console.log(await getCharacters()))();

// test

// new branch
