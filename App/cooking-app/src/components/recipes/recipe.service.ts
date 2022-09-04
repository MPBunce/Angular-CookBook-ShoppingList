import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable()

export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [

  //   new Recipe(
  //     'A test recipe',
  //     'This is a test recipie',
  //     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F07%2F20%2FSkillet-Lemon-Pepper-Salmon-1x1-1.jpg&w=400&h=400&c=sc&poi=%5B1160%2C920%5D&q=60&rect=320%2C144%2C1966%2C1789',
  //     [
  //       new Ingredient('Meat', 91),
  //       new Ingredient('chicken', 14),
  //       new Ingredient('turket', 1),
  //       new Ingredient('fish', 19),
  //     ]
  //   ),

  //   new Recipe(
  //     'Another test recipe',
  //     'This is another test recipie',
  //     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F07%2F20%2FSkillet-Lemon-Pepper-Salmon-1x1-1.jpg&w=400&h=400&c=sc&poi=%5B1160%2C920%5D&q=60&rect=320%2C144%2C1966%2C1789',
  //     [
  //       new Ingredient('lettuce', 11),
  //       new Ingredient('tomato', 21),
  //       new Ingredient('bazel', 1),
  //       new Ingredient('flowers', 14),
  //     ]
  //   )
  
  // ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number){
    return this.recipes[index];
  } 

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice());
  }

}