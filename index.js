customerName = "bob";
bestCustomer;

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
    const leastFavouriteCusomer = 'somebody'
    leastFavouriteCusomer = "somebodyelse";
}
