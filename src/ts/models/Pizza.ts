import { DataResource } from "../services/DataResource";

export interface PizzaProps{
    title: string
    description: string
    toppings: string[]
    price: number
}

const Pizza = new DataResource<PizzaProps>(
    'http://localhost:3000/pizzas'
)

Pizza.save({
    title: 'abc',
    description: 'yummy',
    toppings: ['mushrooms', 'peppers', 'olives'],
    price: 25
})