// --- Esercizi 21-06

// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome"
// es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']

// Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso. es:

// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) // -> [3, 2, 1, 0];

// Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario
// es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['Gabriele', 'Luca'];

(function () {
  const nomi = ["Luca", "Eleonora", "Roberta", "Federica", "Giuseppe"];

  //ESERCIZIO 1
  const arrayIndexAndName = nomi.map(
    (element, index, array) => index + "-" + array[index]
  );
  console.log(arrayIndexAndName);
  //ESERCIZIO 2
  const arrayInverseIndex = nomi.map(
    (element, index, array) => array.length - 1 - index
  );
  console.log(arrayInverseIndex);

  //ESERCIZIO 3
  const arrayIndexAndNam = nomi.map(
    (element, index, array) => nomi[array.length - 1 - index]
  );
  console.log(arrayIndexAndNam);
})();
