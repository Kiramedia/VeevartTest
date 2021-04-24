import axios from "axios";

export function decodeSearch(search) {
  console.log(search);
  return decodeURIComponent(search.replace("?query=", ""))
    .split("+")
    .join(" ")
    .toLowerCase();
}

export function decodeMoves(search){
  console.log(search);
  return decodeURIComponent(search.replace("/moves/", ""))
    .split("+")
    .join(" ")
    .toLowerCase();
}

export function apiRequest(context, search) {
  var api_query = "https://pokeapi.co/api/v2/pokemon/" + search;
  var jsonSelection = {};
  axios
    .get(api_query)
    .then(function (json) {
      jsonSelection.id = json.data.id;
      jsonSelection.name = json.data.name;
      jsonSelection.abilities = [];
      json.data.abilities.forEach((item) => {
        getEffects(item.ability.url).then((result) => {
          jsonSelection.abilities.push({
            ability: {
              name: item.ability.name,
              effect_entries: result,
            },
          });
          context.setState({ abilities: jsonSelection.abilities})
        });
      });

      jsonSelection.moves = [];

      json.data.moves.forEach((item) => {
        getEffects(item.move.url).then((result) => {
          jsonSelection.moves.push({
            move: {
              name: item.move.name,
              effect_entries: result,
            },
          });
          context.setState({ moves: jsonSelection.moves})
        });
      });
      jsonSelection.sprites = json.data.sprites;
      context.setState({ data: jsonSelection });
    })
    .catch((error) => {
      console.log(error);
      context.setState({ data: "Not pokemon" });
    });
}

export async function getEffects(url) {
  let dataResult = [];
  await axios
    .get(url)
    .then(function (json) {
      dataResult = json.data.effect_entries;
    })
    .catch((error) => {
      console.log(error);
    });
  return dataResult;
}
