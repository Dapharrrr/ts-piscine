interface Employe {
    nom: string;
    poste: string;
}

interface Client {
    nom: string;
    entreprise: string;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(personnePro: PersonnePro): void {
    if('poste' in personnePro){
        console.log(`Employé: ${personnePro.nom} travaille comme ${personnePro.poste}.`); 
    }
    else if('entreprise' in personnePro){
        console.log(`Client: ${personnePro.nom} est associé à l'entreprise ${personnePro.entreprise}.`);
    }

}

const employe1: Employe = { nom: "Jack", poste: "Développeur"};
const client1: Client = { nom: "Julie", entreprise: "TechCorp"};

afficherInfoProfessionnelle(employe1);
afficherInfoProfessionnelle(client1);