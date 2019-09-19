// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;

class Neighborhood {
  constructor(name){
    this.name = name
    this.id = ++neighborhoodId

    store.neighborhoods.push(this)
  }
}


class Meal {
  constructor(text,numbr){
    this.text = text
    this.numbr = numbr
    this.id = ++mealId

    store.meals.push(this)
  }
}


class Customer {
  constructor(name,neighborhood){
    this.name = name
    this.numbr = numbr
    this.id = ++customerId

    store.meals.push(this)
  }
}


class Meal {
  constructor(text,numbr){
    this.text = text
    this.numbr = numbr
    this.id = ++mealId

    store.meals.push(this)
  }
}
