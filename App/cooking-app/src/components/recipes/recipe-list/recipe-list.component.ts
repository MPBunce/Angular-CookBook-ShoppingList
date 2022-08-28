import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [

    new Recipe(
      'A test recipe',
      'This is a test recipie',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F07%2F20%2FSkillet-Lemon-Pepper-Salmon-1x1-1.jpg&w=400&h=400&c=sc&poi=%5B1160%2C920%5D&q=60&rect=320%2C144%2C1966%2C1789'
    ),
    new Recipe(
      'Another test recipe',
      'This is another test recipie',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F07%2F20%2FSkillet-Lemon-Pepper-Salmon-1x1-1.jpg&w=400&h=400&c=sc&poi=%5B1160%2C920%5D&q=60&rect=320%2C144%2C1966%2C1789'
    )

  ];



  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
