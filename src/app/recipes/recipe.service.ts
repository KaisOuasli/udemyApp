import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable(
  {
    providedIn:'root'
  }
)
export class RecipeService {

  constructor(private shoppingService: ShoppingService) {

  }

  private recipes: Recipe[] = [];

  recipesChanged = new Subject<Recipe[]>();

  public setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  public findByIndex(index: number) {
    return this.recipes.slice()[index];
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }




}