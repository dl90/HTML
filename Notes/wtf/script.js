
// console.log("hi")

// [1,2].forEach(num => console.log(num))

// (() => {
//   console.log("🤗")
// })()



const url = 'https://pokeapi.co/api/v2/pokemon';

function createDivs(pokemons) {
  pokemons.forEach(pokemon => {
    const div = document.createElement('h3');
    div.innerText = pokemon.name;
    document.body.append(div);
  })
}

// document.addEventListener('click', function(event) {
//   fetch(url) 
//   .then(data => data.json())
//   .then(json => createDivs(json.results))
//   .catch(error => {
//     console.log("AHHHHH ERRORR!!!!!!!!", error.message)
//   });
// })

document.addEventListener('click', async function(event) {
  try {
    const data = await fetch(url) 
    const json = await data.json()
    createDivs(json.results)
  } catch(error) {
    console.log("AHHHHH ERRORR!!!!!!!!", error.message)
  }
})

// AJAX

// Asyncronous JavaScript And XML