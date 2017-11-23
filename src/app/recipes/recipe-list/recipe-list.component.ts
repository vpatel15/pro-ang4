import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeInList = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe1', 'This is a test recipe', 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg'),
    new Recipe('Test recipe2', 'This is a test recipe', 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg'),
    new Recipe('Test recipe3', 'This is a test recipe', 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.selectedRecipeInList.emit(recipe);
  }
}
