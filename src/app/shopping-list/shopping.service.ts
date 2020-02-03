import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


export class ShoppingService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    public ingredientSubject = new Subject<Ingredient[]>();

    public editSubject = new Subject<number>();

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientSubject.next(this.ingredients.slice());
    }

    public getIngredientByIndex (index: number){
        return this.ingredients[index];
    }

    public editIngredient(indexToEdit: number, ingredient: Ingredient){
        this.ingredients[indexToEdit] = ingredient;
        this.ingredientSubject.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientSubject.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index);
        this.ingredientSubject.next(this.ingredients.slice());

    }

}