import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  recipes: Recipe[]=[]

  subscription: Subscription;

  constructor(private recipeService: RecipeService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.fetchRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (data: Recipe[]) => {
      this.recipes = data;
    }
  );
  this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
this.subscription.unsubscribe();
  }

}
