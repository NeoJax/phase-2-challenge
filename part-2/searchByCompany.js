const fs = require('fs');
const company = process.argv[2];
const clients = JSON.parse(fs.readFileSync("clients.json"));
let search = [];
let capitalize = company.toLowerCase().split(" ");

for(let i = 0; i < capitalize.length; i++){
  capitalize[i] = capitalize[i].charAt(0).toUpperCase() + capitalize[i].slice(1);
}

capitalize = capitalize.join(" ");

console.log("Finding companies with name \"" + company + "\"...");

for(let i = 0; i < clients.length; i++){
  if(clients[i].company.includes(capitalize)){
    search.push(clients[i]);
  }
}

for(let i = 0; i < search.length; i++) {
  delete search[i].rep_name;
  delete search[i].no_employees;
  delete search[i].city;
  delete search[i].state;
  delete search[i].created_at;
}

console.log(search);
