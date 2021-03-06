import { Component, Injectable } from '@angular/core'; 

  export interface IProduct{
    name: string;
    price: number;
    description: string;
    promoted: boolean;
  }

@Injectable()
export class ProductsRepository {

    public getProducts(): IProduct[] {
        return [
            {"name": 'tea',
            "price": 10,
            "description": 'Jelly pastry croissant bear claw sweet jelly-o. Cheesecake wafer caramels pudding bear claw. Pie halvah pudding dessert candy canes jujubes.',
            "promoted": false},
            {"name": 'coffee',
            "price": 25,
            "description": 'Croissant cheesecake caramels cookie bonbon gummi bears chocolate bar. Cake cake oat cake halvah chupa chups bear claw candy canes. Oat cake sugar plum.',
            "promoted": true},
            {"name": 'fries',
            "price": 11,
            "description": 'Bear claw lollipop icing gingerbread lemon drops wafer ice cream tart croissant. Pie ice cream biscuit muffin candy canes jujubes at cake sugar plum.',
            "promoted": false},
            {"name": 'cake',
            "price": 75,
            "description": 'Jelly beans macaroon pie muffin icing. Pastry tootsie roll candy canes. Pastry marshmallow tootsie roll jelly toffee halvah at cake sugar plum',
            "promoted": false},
            {"name": 'cookie',
            "price": 19,
            "description": 'Pastry marshmallow gummi bears gummies tootsie roll pudding tiramisu. Topping tiramisu jujubes sweet roll jelly toffee marshmallow tootsie.',
            "promoted": true},
            {"name": 'coke',
            "price": 20,
            "description": 'Jelly pastry croissant bear claw sweet jelly-o. Cheesecake wafer caramels pudding bear claw. Pie halvah pudding dessert candy canes jujubes.',
            "promoted": false},
            {"name": 'water',
            "price": 15,
            "description": 'Croissant cheesecake caramels cookie bonbon gummi bears chocolate bar. Cake cake oat cake halvah chupa chups bear claw candy canes. Oat cake sugar plum.',
            "promoted": true},
            {"name": 'juice',
            "price": 25,
            "description": 'Bear claw lollipop icing gingerbread lemon drops wafer ice cream tart croissant. Pie ice cream biscuit muffin candy canes jujubes at cake sugar plum.',
            "promoted": false},
            {"name": 'ice-cream',
            "price": 50,
            "description": 'Jelly beans macaroon pie muffin icing. Pastry tootsie roll candy canes. Pastry marshmallow tootsie roll jelly toffee halvah at cake sugar plum',
            "promoted": false},
            {"name": 'strawberries',
            "price": 30,
            "description": 'Pastry marshmallow gummi bears gummies tootsie roll pudding tiramisu. Topping tiramisu jujubes sweet roll jelly toffee marshmallow tootsie.',
            "promoted": true}
        ];
    }
}