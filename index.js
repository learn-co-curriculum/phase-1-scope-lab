var customerName = "bob";
var bestCustomer;
const leastFavouriteCusomer = "somebody";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(customer) {
    bestCustomer = customer
}

function changeLeastFavoriteCustomer() {
    
    leastFavouriteCusomer = "somebodyelse";
}
