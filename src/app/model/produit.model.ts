import { categorie } from "./categorie.model";

export class Produit {
    idProduit! : number;
    nomProduit? : string;
    prixProduit? : number;
    dateCreation? : Date ;
    categorie! : categorie;
}