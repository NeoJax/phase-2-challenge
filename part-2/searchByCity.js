const fs = require('fs');
const city = process.argv[2];
const clients = JSON.parse(fs.readFileSync("clients.json"));
let search = [];
let capitalize = city.toLowerCase().split(" ");

for(let i = 0; i < capitalize.length; i++){
  capitalize[i] = capitalize[i].charAt(0).toUpperCase() + capitalize[i].slice(1);
}

capitalize = capitalize.join(" ");

console.log("Finding clients in City \"" + city + "\"...");

for(let i = 0; i < clients.length; i++) {
  if(clients[i].city.includes(capitalize)){
    search.push(clients[i]);
  }
}

for(let i = 0; i < search.length; i++) {
  delete search[i].no_employees;
  delete search[i].phone;
  delete search[i].created_at;
}

console.log(search);
