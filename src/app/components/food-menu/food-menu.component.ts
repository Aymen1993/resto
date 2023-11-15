import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  specialPlats: any = [
    { name: "Pork Sandwich", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_1.png", status: "confirmed" },
    { name: "Roasted Marrow", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_2.png", status: "confirmed" },
    { name: "Summer Cooking", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_3.png", status: "confirmed" },
    { name: "Easter Delight", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_4.png", status: "confirmed" },
    { name: "Tiener Schnitze", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_5.png", status: "confirmed" },
    { name: "Chicken Roast", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_6.png", status: "confirmed" },
  ];
  breakfastPlats: any = [
    { name: "Easter Delight", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_4.png", status: "confirmed" },
    { name: "Tiener Schnitze", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_5.png", status: "confirmed" },
    { name: "Chicken Roast", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_6.png", status: "confirmed" },
    { name: "Pork Sandwich", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_1.png", status: "confirmed" },
    { name: "Roasted Marrow", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_2.png", status: "confirmed" },
    { name: "Summer Cooking", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_3.png", status: "confirmed" },
  ];
  launchPlats: any = [
    { name: "Pork Sandwich", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_1.png", status: "confirmed" },
    { name: "Easter Delight", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_4.png", status: "confirmed" },
    { name: "Roasted Marrow", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_2.png", status: "confirmed" },
    { name: "Tiener Schnitze", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_5.png", status: "confirmed" },
    { name: "Summer Cooking", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_3.png", status: "confirmed" },
    { name: "Chicken Roast", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_6.png", status: "confirmed" },
  ];
  dinnerPlats: any = [
    { name: "Easter Delight", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_4.png", status: "confirmed" },
    { name: "Pork Sandwich", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_1.png", status: "confirmed" },
    { name: "Tiener Schnitze", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_5.png", status: "confirmed" },
    { name: "Roasted Marrow", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_2.png", status: "confirmed" },
    { name: "Chicken Roast", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_6.png", status: "confirmed" },
    { name: "Summer Cooking", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_3.png", status: "confirmed" },
  ];
  sneakesPlats: any = [
    { name: "Pork Sandwich", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_1.png", status: "confirmed" },
    { name: "Easter Delight", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_4.png", status: "confirmed" },
    { name: "Roasted Marrow", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_2.png", status: "confirmed" },
    { name: "Tiener Schnitze", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_5.png", status: "confirmed" },
    { name: "Summer Cooking", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_3.png", status: "confirmed" },
    { name: "Chicken Roast", price: "40.00", description: "They're wherein heaven seed hath nothing", platImg: "assets/img/food_menu/single_food_6.png", status: "confirmed" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
