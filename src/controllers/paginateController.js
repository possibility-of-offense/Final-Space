import { getCharacters } from "../api/charactersService.js";

export async function paginateControllers(store, ctx) {
  let nextElements;

  //   Check if the items are equal to three
  if (Object.values(store.allCharacters).length === 3) {
    nextElements = false;
  } else {
    // Check if there are no items yet
    if (Object.values(store.allCharacters).length === 0) {
      store.allCharacters = await getCharacters();

      //   Check if there is a query parameter in the url
      if (ctx.querystring) {
        const query = Number(ctx.querystring.split("=").pop());

        // If you pass manually a query parameter which cannot retrieve any data,
        // redirect to /catalog
        // e.g. if you have 9 items (3 per page) and you enter /catalog?q=4,
        // you will be redirected
        if (query * 3 > Object.values(store.allCharacters).length) {
          window.location = "/catalog";
          return;
        }

        const estimate = 3 * Number(query) - 3;
        store.currentChars = Object.fromEntries(
          Object.entries(store.allCharacters).slice(estimate, estimate + 3)
        );
        store.lastItem = Object.values(store.currentChars).slice().pop().id;
      } else {
        // If there is not a query parameter in the url
        // return the first three items
        const entries = Object.entries(store.allCharacters);
        store.currentChars = Object.fromEntries(entries.slice(0, 3));
        store.lastItem = Object.values(store.currentChars).slice().pop().id;
      }

      nextElements = true;
    } else {
      // If you have already items in the store

      // If this is the last item

      // If you don't have any querystrings
      if (!ctx.querystring) {
        const entries = Object.entries(store.allCharacters);
        store.currentChars = Object.fromEntries(entries.slice(0, 3));
        store.lastItem = Object.values(store.currentChars).slice().pop().id;
        store.next = true;
        store.prev = null;

        nextElements = true;
      } else {
        if (
          store.lastItem === Object.values(store.allCharacters).slice().pop().id
        ) {
          nextElements = false;
        } else {
          const entries = Object.entries(store.allCharacters);
          const findEntry = entries.findIndex(
            (el) => el[1].id === store.lastItem
          );

          let sliced;
          if (store.next) {
            // If you click next button
            sliced = entries.slice(findEntry + 1, findEntry + 1 + 3);
            store.currentChars = Object.fromEntries(sliced);
            store.lastItem = Object.values(store.currentChars).slice().pop().id;
          } else if (store.prev) {
            // If you click the prev button
            const pr = findEntry - 3 - 2;
            const nx = findEntry - 2;

            sliced = entries.slice(pr, nx);
            store.currentChars = Object.fromEntries(sliced);
            store.lastItem = Object.values(store.currentChars).slice().pop().id;
          }

          // Checking for the nextElements
          if (store.lastItem >= Object.values(store.allCharacters).length) {
            nextElements = false;
          } else {
            nextElements = true;
          }
        }
      }
    }
  }

  return {
    currentChars: store.currentChars,
    nextElements,
  };
}

export function handleButtonClick(store, prev, e) {
  e.target.classList.add("disabled");
  if (prev) {
    store.prev = true;
    store.next = null;
  } else {
    store.prev = null;
    store.next = true;
  }

  store.timer = setTimeout(() => {
    e.target.classList.remove("disabled");
  }, 200);
}
