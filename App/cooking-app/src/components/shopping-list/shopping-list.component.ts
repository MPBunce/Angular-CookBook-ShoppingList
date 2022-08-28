import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 12),
    new Ingredient('Oranges', 6)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient){
    this.ingredients.push(ingredient)
  }

}
