export function ordenarAaZ(pokemonGo, filtroOrdem) {

  if (filtroOrdem == "a-z") {
    
    return pokemonGo.sort(function (a, b) {

      if (a.name <= b.name) {
        return -1;
      } else {
        return 1;
      }
    });
  } else {

    return pokemonGo.sort(function (a, b) {

      if (a.name <= b.name) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
  
  export const buscarTipo = (pokemonGo, filtroTipo) => pokemonGo.filter((tipo) =>
  (tipo.type.includes(filtroTipo)));

  export const porNome = (pokemonGo, pokeName) => pokemonGo.filter((nome) =>
  (nome.name.toLowerCase().indexOf(pokeName.toLowerCase()) > -1));
  
  export const resultado = (pokemonGo, filtroTipo) =>
  ((filtroTipo) / (pokemonGo) * 100);
  
