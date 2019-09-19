// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;





class Neighborhood {
  constructor(name){
    this.name = name
    this.id = ++neighborhoodId

    store.neighborhoods.push(this)
  }

  deliveries() {
    return store.deliveries.filter(
        function(deliverie) {
            return deliverie.neighborhoodId === this.id;
        }.bind(this)
    );
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
  constructor(name,neighborhood.id){
    this.name = name
    this.neighborhoodId = neighborhood.id
    this.id = ++customerId

    store.customers.push(this)
  }
}











class Delivery {
  constructor(meal,neighborhood,customer){
    this.neighborhoodId = neighborhood.id;
    this.mealId = meal.id;
    this.customerId = customer.id;
    this.id = ++deliveryId

    store.deliveries.push(this)
  }
}
