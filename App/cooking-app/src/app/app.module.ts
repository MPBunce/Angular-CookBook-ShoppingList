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
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from 'src/components/shopping-list/shopping-list.service';
import { FormsModule } from '@angular/forms';
import { RecipeStart } from 'src/components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'src/components/recipes/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from 'src/components/recipes/recipe.service';
import { HttpClientModule} from '@angular/common/http'
import { AuthComponent } from 'src/components/auth/auth.component';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeStart,
    RecipeEditComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
