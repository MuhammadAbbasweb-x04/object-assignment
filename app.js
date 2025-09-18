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


const students = [
  { name: "Ali", scores: 88 },
  { name: "Sara", scores: 94 },
  { name: "Zara", scores: 78 },
  { name: "Ahmed", scores: 95},
  { name: "Kashif", scores: 87 }
];
let topscore = [];
let ul = document.querySelector("ul");

for(let i =0; i < students.length; i++){
if(topscore > students[i]){
p.innerHTML += ` <li>${students[i].name}
${students[i].scores}

</li>

`
}
}


