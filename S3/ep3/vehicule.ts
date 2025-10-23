interface Vehicule {
    marque: string,
    annee: number
}

function isVehicule(obj: any): obj is Vehicule{
    if (typeof obj.marque === 'string' && typeof obj.annee === 'number'){
        return true
    }
    return false
}

function afficherVehicule(obj: any){
    if (isVehicule(obj)){
        console.log(`Le véhicule ${obj.marque} de l'année ${obj.annee} est valide.`);
    } else {
        console.log(`Objet invalide pour un véhicule.`);
        
    }
}

afficherVehicule({marque: "mercedes", annee: 2025});
afficherVehicule({marque: "mercedes", annee: "non"});