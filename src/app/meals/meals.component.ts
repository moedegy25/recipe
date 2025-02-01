import { Component } from '@angular/core';
import { FlowbiteService } from './../services/flowbite.service';
import { MealsapiService } from '../services/mealsapi.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ استيراد FormsModule
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [FormsModule,RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {

  mealList!:any[];
  categoryList!:any[];
  selectedOption: string = '';

  constructor(private FlowbiteService: FlowbiteService,private _MealsapiService:MealsapiService,private router: Router) {}


  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });

    this._MealsapiService.getall().subscribe({
      next: (value) => { console.log(value) ; this.mealList=value.meals    ; }})
  
   
    

   this._MealsapiService.getcategory().subscribe({
    next: (value) => { console.log(value) ; this.categoryList=value.categories;}})


  }

  getSpecifcmeals(meal:string):void{
    console.log(meal);
    this._MealsapiService.getMeals(meal).subscribe({
      next: (value) => { console.log(value) ; this.mealList=value.meals    ; }})

  }


  onOptionChange() {
    console.log('القيمة المختارة:', this.selectedOption);
    this._MealsapiService.getMeals(this.selectedOption).subscribe({
      next: (value) => { console.log(value) ; this.mealList=value.meals    ; }})
  }

  goToIngredientsPage(mealIdNumber:string) {
    this.router.navigate(['/Ingredients'], { state: { mealId: mealIdNumber } });
  }

  getALLmeals(){
    this._MealsapiService.getall().subscribe({
      next: (value) => { console.log(value) ; this.mealList=value.meals    ; }})

  }
}
