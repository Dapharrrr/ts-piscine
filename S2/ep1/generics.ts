const nombres : number[] = [1, 2, 3, 4, 5];
const chaines : string[] = ["un", "deux", "trois"];
const objets : { nom : string }[] = [{ nom: "Alice"}, { nom: "Bob"}];

function premierElement<T>(tableau: T[]){
    return tableau[3];
}

premierElement(nombres);
premierElement(chaines);
premierElement(objets);

console.log("Premier nombre :", premierElement(nombres));
console.log("Première chaîne :", premierElement(chaines));
console.log("Premier objet :", premierElement(objets));