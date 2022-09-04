import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from 'src/components/recipes/recipes.component';
import { ShoppingListComponent } from 'src/components/shopping-list/shopping-list.component';
import { RecipeStart } from 'src/components/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from 'src/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/components/recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from 'src/components/recipes/recipes-resolver.service';


const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [

    {path: '', component: RecipeStart},  
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },

  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
