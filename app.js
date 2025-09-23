// Q1
//Answer

// const students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 90 },
//   { name: "Zara", marks: 78 },
//   { name: "Ahmed", marks: 92 }
// ];

// let table =document.querySelector("table");
// for(let i = 0; i < students.length; i++ ){
// table.innerHTML += `<tr> 
// <td> 
// Students name
// ${students[i].name}
// Students marks
// ${students[i].marks}
// </td>
// </tr>
// `
// table.style.fontSize =  "1.2rem"

// }


// Q2
//Answer


// const students = [
//   { name: "Ali", scores: 88 },
//   { name: "Sara", scores: 94 },
//   { name: "Zara", scores: 78 },
//   { name: "Ahmed", scores: 95},
//   { name: "Kashif", scores: 87 }
// ];
// let topscore = [];
// let ul = document.querySelector("ul");

// for(let i =0; i < students.length; i++){
// if(topscore  < students[i].scores){
// ul.innerHTML = ` <li> ${topscore = students[i].scores }${students[i].name}




// </li>
// `
// }
// }


// Q3
//Answer
// const products = [
//   { name: "Laptop", price: 75000 },
//   { name: "Phone", price: 30000 },
//   { name: "Tablet", price: 45000 },
//   { name: "Monitor", price: 15000 },
//   { name: "Keyboard", price: 2500 },
//   { name: "Mouse", price: 1200 },
//   { name: "Smartwatch", price: 10000 }
// ];


// let ul = document.querySelector("ul")
// let minprice = 2500;
// let maxprice = 75000;
// for(let i = 0; i < products.length; i++){
// if(products[i].price >= minprice && products[i].price < maxprice){
// ul.innerHTML += `<li> productname. ${products[i].name}  product price. ${products[i].price}
// </li>
// `
// ul.style.fontSize = "1.3rem"

// }
// }



// Q4
//Answer
// const wordCounts = { 
//   hello: 3,
//   world: 2,
//   this: 1,
//   is: 1,
//   test: 1
// };

// let inputtext = document.querySelector("#inputtext");
// let p = document.querySelector("p");

//  let wordskeys = Object.keys(wordCounts);
// function words(){
// for(let i = 0; i < wordCounts.length; i++){
// let key = wordCounts[i]

// p.innerHTML += ` ${inputtext.value}

// ${key}: ${wordCounts[key]}
// `
// }
//





// Q5
//Answer
// let role = "admin"
// let user = {
//     name: "Muhammad Abbas",
//     cit: "quetta",
//     age: 21,
//     [role] : "Muhammad Abbas"
// }


// console.log(user);

// Q6
//Answer
// const products = [
//   { name: "Laptop", price: 75000 },
//   { name: "Phone", price: 30000 },
//   { name: "Tablet", price: 45000 },
//   { name: "Monitor", price: 15000 },
//   { name: "Keyboard", price: 2500 },
//   { name: "Mouse", price: 1200 },
//   { name: "Smartwatch", price: 10000 }
// ];


// let ul = document.querySelector("ul");


// for(let i =0; i < products.length; i++){
// ul.innerHTML += `<li>  
// ${products[i].name}
// ${products[i].price}

// </li>
// `
// }


// function toggleBtn(){
//   products.sort(function(a,b){
// return a.price - b.price
//   })
// }



// Q7
//Answer

// let nameinput = document.querySelector("#nameinput");
// let emailinput = document.querySelector("#emailinput");
// let ageinput = document.querySelector("#ageinput");
// let arrobj = [];
// function submit(){
// const userinfo = {
// name : nameinput.value,
// email: emailinput.value,
// ege :  ageinput.value,
// }
// arrobj.push(userinfo)
// console.log(arrobj)
// }


// Q8
//Answer
// const user = {
//   name: "Muhammad Abbas",
//   email: "Abbas@gmail.com",
//   address: {
//     city: "Quetta",
//     country: "Pakistan",
//   }
// };
// let div = document.querySelector("#disply")
// div.innerHTML = `<ul><li>${user.name} </li> <li> ${user.email} </li>
// <li> ${user.address.city} </li>
// <li> ${user.address.country} </li>
// <ul> ` 

// Q9
//Answer
// const cart = [
//   {
//     name: "T-Shirt",
//     brand: "Nike",
//     price: 1200,
//     quantity: 2,
    

  
//   },
//   {
//     name: "Sneakers",
//     brand: "Adidas",
//     price: 5500,
//     quantity: 1
//   },
//   {
//     name: "Backpack",
//     brand: "Puma",
//     price: 3000,
//     quantity: 1
//   },
//   {
//     name: "Watch",
//     brand: "Fossil",
//     price: 8000,
//     quantity: 1
//   }
// ];

// let div = document.querySelector("#disply")
// let h1 = document.querySelector("h1");
// let total = 0;

// for(let i =0; i < cart.length; i++){
// div.innerHTML += `<div id="card"> 
//  <h2>product name: ${cart[i].name}</h2>
//  <h3>brand: ${cart[i].brand}</h3>
// <h3>price:  ${cart[i].price}</h3>
// <h3>quantity:  ${cart[i].quantity}</h3>
// </div>
// `
// total += cart[i].price * cart[i].quantity
// h1.innerHTML = `Total:${total}`

// }



// Q11
//Answer

// let searchinput = document.querySelector("#searchinput");
// let div =document.querySelector("#conatiner");
//   const products = [
//     { id: 1, name: "Apple", category: "Fruit" },
//     { id: 2, name: "Banana", category: "Fruit" },
//     { id: 3, name: "Carrot", category: "Vegetable" },
//     { id: 4, name: "Dates", category: "Dry Fruit" },
//     { id: 5, name: "Eggplant", category: "Vegetable" }
//   ];

// for(let i =0; i < products.length; i++){
// div.innerHTML += `<div id="cartitems">
// <h3>Product name:${products[i].name}</h3>
// </br>
// <h3>category:${products[i].category}<h3>
// </br>
// </div>

// ` 

// }
// let show = document.querySelector("#showresult")
// let newarr = products.filter(product => {
// return product.name.toLocaleLowerCase().includes(searchinput) || product.category.toLocaleLowerCase().includes(searchinput)
// })
// show.innerHTML = searchinput.value