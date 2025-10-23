const nombres : number[] = [1, 2, 3, 4, 5];
const chaines : string[] = ["un", "deux", "trois"];
const objets : { nom : string }[] = [{ nom: "Alice"}, { nom: "Bob"}];
const tableauVide : any[] = [];


function premierElement<T>(tableau: T[]) : T | undefined{
    return tableau.length > 0 ? tableau[0] : undefined;
}

console.log("Premier nombre :", premierElement(nombres));
console.log("Première chaîne :", premierElement(chaines));
console.log("Premier objet :", premierElement(objets));
console.log("Tableau vide :", premierElement(tableauVide));

