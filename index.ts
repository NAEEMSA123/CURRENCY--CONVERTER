#! /usr/bin/env node
import inquirer from "inquirer";


let currency:any = {
    USD: 1, // Base Currency 
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280

};

let userAnswer = await inquirer.prompt(
    [
    {
        name:'from',
        message:'Enter from Currency',
        type:'list',
        choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name:'to',
        message:'Enter to Currency',
        type:'list',
        choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name:'amount',
        message:'Enter your Amount',
        type:'number'
    }
   ]
);


let fromAmount = currency[userAnswer.from] // Exchange rate 
let toAmount = currency[userAnswer.to] // Exchange rate 
let amount = userAnswer.amount
let baseAmount = amount / fromAmount // base currency //4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)
