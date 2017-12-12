# Scope Lab

## Objectives
1. Understand the difference between `const` and `let`
2. Understand functions determine scope in JavaScript

## Introduction
Scuber's drivers are beginning to take some notes down about their customers. Use your knowledge of scope to access and change some of these variables.

## Instructions
A word of warning. In this lab, you will practice doing some bad things. For example, we'll ask you to declare variables in global scope, and write functions that break down. We do this, because by testing the limits, and exposing the underbelly of a language you can better understand it, and know what to avoid in the future.

Ok, these are your tasks:
* `customerName`: Declare a variable in global scope called `customerName` using the `var` keyword.
* `upperCaseCustomerName()`: Write a function that accesses that global `customerName` variable, and uppercases it.
* `setBestCustomer()`: Write a function that when called, declares a variable called `bestCustomer` in global scope and assigns it to be `'not bob'`. (Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
* `overwriteBestCustomer()`: See the consequences of declaring a variable in global scope, by writing a new function called `overwriteBestCustomer()` that changes that `bestCustomer` variable.
* `leastFavoriteCustomer` and `changeLeastFavoriteCustomer()`: Now declare a constant in global scope called `leastFavoriteCustomer`, be sure to assign it some initial value. Ok, now write a function called `changeLeastFavoriteCustomer()` that attempts to change that constant - notice what JavaScript does when you try to change the constant.

<p class='util--hide'>View <a href='https://learn.co/lessons/js-principles-scope-lab'>Scope Lab</a> on Learn.co and start learning to code for free.</p>
