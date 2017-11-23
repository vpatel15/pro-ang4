import { Injectable, EventEmitter } from '@angular/core';
import { ingredient, ingredient } from '../shared/ingredients.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<ingredient[]>();
  ingredients: ingredient[] = [
    new ingredient('Apples',5),
    new ingredient('Tomatoes',10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }  

  addIngredientToShoppingList(ingredient: ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
