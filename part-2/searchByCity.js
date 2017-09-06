const fs = require('fs');
const city = process.argv[2];
const clients = JSON.parse(fs.readFileSync("clients.json"));
let search = [];

console.log("Finding clients in City \"" + city + "\"...");

for(let i = 0; i < clients.length; i++) {
  if(clients[i].city.includes(city)){
    search.push(clients[i]);
  }
}

for(let j = 0; j < search.length; j++) {
  delete search[j].no_employees;
  delete search[j].phone;
  delete search[j].created_at;
}

console.log(search);
