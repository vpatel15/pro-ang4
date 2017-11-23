import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test recipe1', 
      'This is a test recipe', 
      'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg',
      [new ingredient('Bread',10),new ingredient('beer',20)]),
    new Recipe('Test recipe2', 
      'This is a test recipe', 
      'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg',
      [new ingredient('toast',10),new ingredient('beer',20)]),
    new Recipe('Test recipe3', 
      'This is a test recipe', 
      'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg',
      [new ingredient('jam',10),new ingredient('beer',20)])
  ];  

  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }  

  addIngredientsToShoppingList(ingredient: ingredient[]){
    this.slService.addIngredientToShoppingList(ingredient);
  }

}
