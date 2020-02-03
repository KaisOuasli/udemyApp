import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor(private shoppingService: ShoppingService) { }

  private editMode = false;
  private ingredientToEdit: Ingredient;
  @ViewChild('f', { static: false }) 
  private fomrRef: NgForm;
  EditSubscription: Subscription;
  private indexEdit: number;

  ngOnInit() {
    this.EditSubscription = this.shoppingService.editSubject.subscribe(
      (index: number) => {
        this.ingredientToEdit = this.shoppingService.getIngredientByIndex(index);
        this.editMode = true;
        this.indexEdit = index;
        this.fomrRef.setValue({
          name: this.ingredientToEdit.name,
          amount: this.ingredientToEdit.amount
        });
        
      }
    )
  }

  ngOnDestroy(): void {
    this.EditSubscription.unsubscribe;
  }


  onSubmit(form: NgForm) {
    const formValue = form.value;
    const editedIngredient = new Ingredient(formValue.name, formValue.amount);
    if (this.editMode){
      this.shoppingService.editIngredient(this.indexEdit, editedIngredient);
      this.editMode=false;
    } else {
      this.shoppingService.addIngredient(editedIngredient);
    }
    form.reset();
  }

  onClear(){
    this.fomrRef.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.indexEdit);
    this.fomrRef.reset();
    this.editMode = false;
  }

}
