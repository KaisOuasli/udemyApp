import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientSubject.subscribe(
      (tab: Ingredient[]) => {
        this.ingredients = tab;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }

  onEditIngredient(index: number){
    this.shoppingService.editSubject.next(index);
  }



}
