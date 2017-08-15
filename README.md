JavaScript Practice Scope Lab
---

## Objectives

1. Understand the difference between const and let
2. Understand functions determine scope in Javascript  

## Introduction
Scuber's drivers are beginning to take some notes down about their customers.  Use your knowledge of scope to access and change some of these variables.  

## Instructions
A word of warning.  In this lab, you will practice doing some bad things.  For example, we'll ask you to declare variables in global scope, and write functions that break down.  We do this, because by testing the limits, and exposing the underbelly of a language you can better understand it, and know what to avoid in the future.

Ok, this is your task.

* customerName: Declare a variable in global scope called customerName using the `var` keyword.

* upperCaseCustomerName: Write a function that accesses that global customerName variable, and uppercases it.

* setBestCustomer: Write a function that when called, declares a variable called `bestCustomer` in global scope and assigns it to be `'not bob'`.  (Poor bob.)  Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.

* overWriteBestCustomer: See the consequences of declaring a variable in global scope, by writing a new function called `overWriteBestCustomer` that changes that `bestCustomer` variable.

* leastFavoriteCustomer and changeLeastFavoriteCustomer: Now declare a constant in global scope called leastFavoriteCustomer customer.  Ok, now write a function called changeLeastFavoriteCustomer that attempts to change that constant - notice what Javascript does when you try to change the constant.  

* attemptTwoFavoriteCustomers: Now write another function that will break down.  Try declaring a variable called favoriteCustomer and redeclaring that same variable such that an error is thrown.  This helps illustrate how let only allows a given variable to be declared one time, but that variable can be re-assigned to a different value.  However, const does not allow re-assignment, nor does it allow the same constant to be declared more than once.
