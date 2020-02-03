import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

  constructor(private shoppingService: ShoppingService) {

  }

  private recipes: Recipe[] = [
    new Recipe("test recipe 1", "this is test description", "https://static01.nyt.com/images/2019/12/11/dining/11as-pasta-with-ricotta-and-lemon/merlin_155855151_a42a72df-8230-420d-b9b9-d81fe089ff55-articleLarge.jpg",
      [new Ingredient('apple', 2), new Ingredient('cucember', 10)]),
    new Recipe('test recipe 2', 'this is a description', 'https://images.herzindagi.info/image/2019/Oct/paneer-recipes.jpg',
      [new Ingredient('cake', 4), new Ingredient('chocolat', 12)]),
    new Recipe('test recipe 3', 'this is a description', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=450&c=sc&poi=face&q=85',
      [new Ingredient('blue berry', 30), new Ingredient('Cream', 9)])
  ]

  public getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  findByIndex(index: number) {
    return this.recipes.slice()[index];
  }




}