import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MealsapiService } from '../services/mealsapi.service';

@Component({
  selector: 'app-mealdetails',
  imports: [],
  templateUrl: './mealdetails.component.html',
  styleUrl: './mealdetails.component.scss'
})
export class MealdetailsComponent {
  mealData:any;
  items = Array(12).fill(0); 

  constructor(private route: ActivatedRoute,private location: Location,private _MealsapiService:MealsapiService) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log('القيمة المستلمة:', params['mealId']); 
    // });

    const state = history.state;
    console.log(state.mealId); // ✅ { category: 'Chicken' }

    this._MealsapiService.getmeailById(state.mealId).subscribe({
      next: (value) => { console.log(value) ; this.mealData=value.meals[0];


    }
     })
      
  


  }
}
