import { Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { MealdetailsComponent } from './mealdetails/mealdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'meals',pathMatch:'full'},
{path:'meals', component:MealsComponent,title:'meals'},
{path:'Ingredients', component:MealdetailsComponent,title:'Ingredients'},
{path:'**', component:NotfoundComponent,title:'Notfound page'}, 
];
