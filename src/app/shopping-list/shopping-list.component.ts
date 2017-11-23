import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[];
  constructor(private ingredientService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientService.ingredientsChanged
      .subscribe((ingredients: ingredient[]) => {
        this.ingredients = ingredients;
      })
  }

}
