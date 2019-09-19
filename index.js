// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0,

class Neighborhood {
  constructor(name){
    this.name = name
    this.id = ++neighborhoodId

    store.neighborhoods.push(this)
  }
}


class Meal {
  constructor(text,numb){
    this.text = text
    this.numb = numb
    this.id = ++mealId

    store.neighborhoods.push(this)
  }
}
