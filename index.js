var customerName = 'bob'
//global var customerName
var bestCustomer;
//global best customer

function upperCaseCustomerName(){
   
    customerName = customerName.toUpperCase() 

}

function setBestCustomer() {
     bestCustomer = 'not bob'
//scope bestCustomer not bob    
}

function overwriteBestCustomer(){

    bestCustomer = 'maybe bob'
    //scope chain overwritten previous function
}

function changeLeastFavoriteCustomer(){

    const leastFavoriteCustomer = "jeff"

    leastFavoriteCustomer = customerName;
}