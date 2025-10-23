class Rectangle {
    largeur: number;
    hauteur: number;

    constructor(largeur: number, hauteur: number){
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle {
    rayon: number;

    constructor(rayon: number){
        this.rayon = rayon;
    }

    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

function afficherSurface(forme: Rectangle | Cercle): void {
    if (forme instanceof Rectangle){
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}.`);
    } else {
        console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}.`);
        
    }
}

const rectangle: Rectangle = new Rectangle(5, 10);
const cercle: Cercle = new Cercle(7);

afficherSurface(rectangle);
afficherSurface(cercle);