import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from 'src/components/Header/header.component';
import { ShoppingEditComponent } from 'src/components/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from 'src/components/shopping-list/shopping-list.component';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { RecipeListComponent } from 'src/components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from 'src/components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from 'src/components/recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
