interface Voiture {
  marque: string;
  modele: string;
  annee: number;
}

const maVoiture: Voiture = {
    marque: "Mercedes",
    modele: "Classe GLE",
    annee: 2025
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log("La marque est une", getProperty(maVoiture, "marque"));
console.log("L'année :", getProperty(maVoiture, "annee"));
// console.log("Couleur :", getProperty(couleur, "couleur")); // test d'une key inexistante


