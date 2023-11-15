import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from '../model/categorie.model';



@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit{
  newProduit = new Produit();
/*   categories! : categorie[]; */
  newIdCat! : number;
  /* newcategorie! : categorie; */
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router :Router) { }
  
  ngOnInit():void{
  /*     this.categories = this.produitService.listecategories(); */
  }
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
  }
}
